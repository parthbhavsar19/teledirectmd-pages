'use client';
import { useState } from 'react';

const TABS = [
  {
    id: 'trucking',
    label: 'Trucking & Logistics',
    title: 'Trucking & Logistics',
    body: 'Drivers can\'t stop on a route to see a doctor. Our $59 visits handle the routine stuff: chronic refills (blood pressure, asthma, hypothyroid), DOT-compliance-friendly care, smoking cessation, sinus, UTI. Same-day appointments from any truck stop. We do not perform the FMCSA DOT physical — that still requires an in-person certified medical examiner — but everything routine, we handle.',
  },
  {
    id: 'restaurants',
    label: 'Restaurants & QSR',
    title: 'Multi-Unit Restaurants & QSR',
    body: '70% of your hourly workers don\'t have employer benefits. A real doctor benefit — at zero cost to you — is the simplest retention tool you can offer in a tight labor market. We cover women\'s health, skin, urgent care, work-excuse notes. Same physician every visit, so your team isn\'t bounced through a stranger network.',
  },
  {
    id: 'homecare',
    label: 'Home Healthcare',
    title: 'Home Healthcare Agencies',
    body: 'Caregivers can\'t leave a patient to see a doctor. Distributed workforces in patients\' homes need virtual care that actually works. Chronic conditions, women\'s health, smoking cessation — all in scope. With 79% annual turnover, benefits are the single most cost-effective retention lever — and we cost you nothing.',
  },
  {
    id: 'construction',
    label: 'Construction & Trades',
    title: 'Non-Union Construction & Trades',
    body: 'Average ER visit for a minor injury runs $1,454+. Virtual triage cuts unnecessary ER trips and OSHA recordable events. We also handle chronic refills for an aging trades workforce, smoking cessation, skin and minor cuts assessments. Telemedicine isn\'t right for active injuries — but it\'s right for everything that comes before and after.',
  },
  {
    id: 'cleaning',
    label: 'Cleaning & Janitorial',
    title: 'Cleaning & Janitorial Services',
    body: 'Distributed female-majority workforces with daily chemical exposure. Skin and rash assessments, women\'s health, chronic refills, urgent care — all in scope. Field employees across multiple sites mean virtual care isn\'t a nice-to-have — it\'s the only practical access model.',
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
        </div>
      ))}
    </>
  );
}
