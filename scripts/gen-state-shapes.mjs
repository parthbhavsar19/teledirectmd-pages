// Requires (outside the repo): npm i us-atlas@3.0.1 topojson-client@3.1.0 topojson-simplify@3.0.3 d3-geo@3.1.1
// Writes shapes.json; lib/state-shapes.js is built from it.
import fs from 'fs';
import { feature } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { geoConicEqualArea, geoPath, geoArea } from 'd3-geo';
const topo = JSON.parse(fs.readFileSync('node_modules/us-atlas/states-10m.json'));
const pre = presimplify(topo);
const st = simplify(pre, quantile(pre, 0.55));
const P = {Alabama:'al',Alaska:'ak',Arizona:'az',Arkansas:'ar',California:'ca',Colorado:'co',Connecticut:'ct',Delaware:'de','District of Columbia':'dc',Florida:'fl',Georgia:'ga',Hawaii:'hi',Idaho:'id',Illinois:'il',Indiana:'in',Iowa:'ia',Kansas:'ks',Kentucky:'ky',Louisiana:'la',Maine:'me',Maryland:'md',Massachusetts:'ma',Michigan:'mi',Minnesota:'mn',Mississippi:'ms',Missouri:'mo',Montana:'mt',Nebraska:'ne',Nevada:'nv','New Hampshire':'nh','New Jersey':'nj','New Mexico':'nm','New York':'ny','North Carolina':'nc','North Dakota':'nd',Ohio:'oh',Oklahoma:'ok',Oregon:'or',Pennsylvania:'pa','Rhode Island':'ri','South Carolina':'sc','South Dakota':'sd',Tennessee:'tn',Texas:'tx',Utah:'ut',Vermont:'vt',Virginia:'va',Washington:'wa','West Virginia':'wv',Wisconsin:'wi',Wyoming:'wy'};
const feats = feature(st, st.objects.states).features;
const out = {};
for (const f of feats) {
  const code = P[f.properties.name]; if (!code) continue;
  let [[x0,y0],[x1,y1]] = [[0,0],[0,0]];
  // center longitude for the conic
  const b = geoPath().bounds(f);
  let cLon = (b[0][0]+b[1][0])/2, cLat=(b[0][1]+b[1][1])/2;
  if (code==='ak') { cLon=-152; cLat=62; }
  if (code==='hi') { cLon=-157; cLat=20.5; }
  const proj = geoConicEqualArea().rotate([-cLon,0]).center([0,cLat]).parallels([cLat-3,cLat+3]);
  let geo = f;
  if (code==='ak') { // drop the far western Aleutians across the antimeridian for a clean silhouette
    geo = {...f, geometry:{type:'MultiPolygon',coordinates:f.geometry.coordinates.filter(poly=>poly[0].every(([lo])=>lo<0 && lo>-172))}};
  }
  if (code==='hi') {
    geo = {...f, geometry:{type:'MultiPolygon',coordinates:f.geometry.coordinates.filter(poly=>poly[0].every(([lo])=>lo>-161))}};
  }
  if (geo.geometry.type==='MultiPolygon') {
    const polys = geo.geometry.coordinates;
    const areas = polys.map(p=>geoArea({type:'Polygon',coordinates:p}));
    const max = Math.max(...areas);
    const keep = code==='hi' ? 0.004 : code==='ak' ? 0.03 : 0.012;
    geo = {...geo, geometry:{type:'MultiPolygon',coordinates:polys.filter((p,i)=>areas[i]>=max*keep)}};
  }
  proj.fitExtent([[8,8],[232,232]], geo);
  const path = geoPath(proj).digits(1);
  let d = path(geo);
  const [[a,bq],[c,e]] = path.bounds(geo);
  out[code] = { d, w: +(c-a).toFixed(1), h: +(e-bq).toFixed(1), x:+a.toFixed(1), y:+bq.toFixed(1) };
}
fs.writeFileSync('shapes.json', JSON.stringify(out));
for (const k of Object.keys(out).sort()) console.log(k, out[k].d.length);
