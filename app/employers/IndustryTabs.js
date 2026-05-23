'use client';
import { useState } from 'react';

const TABS = [
  {
    id: 'trucking',
    label: 'Trucking & Logistics',
    title: 'Trucking & Logistics',
    body: 'Drivers can\'t stop on a route to see a doctor. Our $59 visits handle the routine primary care: chronic refills (blood pressure, asthma, hypothyroid), acute illness like sinus and UTI, mental health. Same-day appointments from any truck stop. We do not perform DOT physicals — those still require an in-person FMCSA-certified Medical Examiner — but the day-to-day primary care between exams, we handle.',
    detailHref: '/employers/trucking',
  },
  {
    id: 'restaurants',
    label: 'Restaurants & QSR',
    title: 'Multi-Unit Restaurants & QSR',
    body: '22% of food service workers have no health insurance. Minor burns and cuts, contact dermatitis, GI illness, mental health, standard work-excuse notes — all primary-care scope. A real doctor benefit at zero cost to you is the simplest retention tool in a tight labor market.',
    detailHref: '/employers/restaurants',
  },
  {
    id: 'homecare',
    label: 'Home Healthcare',
    title: 'Home Healthcare Agencies',
    body: 'Caregivers can\'t leave a patient to see a doctor. Back and shoulder pain assessment, chronic disease management, acute illness, mental health — all primary-care scope. With ~80% annual turnover, healthcare access is the single most cost-effective retention lever. Credentialing workflows (TB, Hep B) still go through your occupational medicine vendor.',
    detailHref: '/employers/home-care',
  },
  {
    id: 'construction',
    label: 'Construction & Trades',
    title: 'Non-Union Construction & Trades',
    body: 'Construction has the second-highest uninsured rate of any occupation (27.8%). We provide primary care for the chronic and routine: hypertension management, diabetes, back and shoulder pain, mental health. OSHA medical surveillance (respirator clearances, silica, lead/asbestos) remains with your occupational medicine vendor.',
    detailHref: '/employers/construction',
  },
  {
    id: 'cleaning',
    label: 'Cleaning & Janitorial',
    title: 'Cleaning & Janitorial Services',
    body: 'Contact dermatitis management, standard asthma care, chronic disease, mental health. ~27% of building service workers work non-daytime shifts. For workers\' comp evaluations or OSHA recordkeeping, your operator continues to use its dedicated vendors — we are a primary-care practice for the day-to-day.',
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
