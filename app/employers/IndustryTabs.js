'use client';
import { useState } from 'react';

const TABS = [
  {
    id: 'trucking',
    label: 'Trucking & Logistics',
    title: 'Trucking & Logistics',
    body: 'Drivers can\'t stop on a route to see a doctor. Our $59 visits handle the routine stuff: chronic refills (blood pressure, asthma, hypothyroid), DOT-card-protective care, sinus, UTI. Same-day appointments from any truck stop. We do not perform the FMCSA DOT physical — that still requires an in-person certified medical examiner — but everything routine, we handle.',
    detailHref: '/employers/trucking',
  },
  {
    id: 'restaurants',
    label: 'Restaurants & QSR',
    title: 'Multi-Unit Restaurants & QSR',
    body: '22% of food service workers have no health insurance. Burns, cuts, contact dermatitis, norovirus clearance, food-handler documentation — all telehealth-manageable. A real doctor benefit at zero cost to you is the simplest retention tool in a tight labor market.',
    detailHref: '/employers/restaurants',
  },
  {
    id: 'homecare',
    label: 'Home Healthcare',
    title: 'Home Healthcare Agencies',
    body: 'Caregivers can\'t leave a patient to see a doctor. TB and Hep B documentation review, back-injury triage, return-to-work clearance, chronic disease management — all virtual. With ~80% annual turnover, healthcare access is the single most cost-effective retention lever.',
    detailHref: '/employers/home-care',
  },
  {
    id: 'construction',
    label: 'Construction & Trades',
    title: 'Non-Union Construction & Trades',
    body: 'OSHA 1910.134 respirator medical evaluations done by telehealth — same-day written clearance. Eye injury triage, MSK return-to-work documentation, hypertension management for the 27.8% uninsured. The trades have the highest occupational eye injury rate of any group.',
    detailHref: '/employers/construction',
  },
  {
    id: 'cleaning',
    label: 'Cleaning & Janitorial',
    title: 'Cleaning & Janitorial Services',
    body: 'Cleaning-chemical asthma, contact dermatitis, eye splashes, night-shift health. 27% of building service workers work non-daytime shifts. Same-day virtual care for chemical exposure incidents, OSHA respirator clearances, occupational asthma WC documentation.',
    detailHref: '/employers/cleaning',
  },
];

export default function IndustryTabs() {
  const [activeId, setActiveId] = useState('trucking');
  return (
    <>
      <div className="tdmd-emp-tabs" role="tablist" aria-label="Industries we serve">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={activeId === t.id}
            aria-controls={`tdmd-emp-panel-${t.id}`}
            id={`tdmd-emp-tab-${t.id}`}
            className="tdmd-emp-tab"
            onClick={() => setActiveId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {TABS.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`tdmd-emp-panel-${t.id}`}
          aria-labelledby={`tdmd-emp-tab-${t.id}`}
          className="tdmd-emp-tabpanel"
          hidden={activeId !== t.id}
        >
          <h3>{t.title}</h3>
          <p>{t.body}</p>
          {t.detailHref && (
            <p style={{ marginTop: '0.85rem' }}>
              <a href={t.detailHref} className="tdmd-emp-tablink" aria-label={`See full ${t.title} page`}>
                See the full {t.label.toLowerCase()} page →
              </a>
            </p>
          )}
        </div>
      ))}
    </>
  );
}
