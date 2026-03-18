'use client';

import { useState } from 'react';
import USMap from '../components/USMap';

const ELATION_URL = 'https://app.elationemr.com/book/1075292561866756?appointment_types=1088614218596457';

export default function BookOnlinePage({ states }) {
  const [selectedAbbr, setSelectedAbbr] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const statesByAbbr = {};
  states.forEach((s) => { statesByAbbr[s.abbr] = s; });

  const handleMapClick = (abbr) => {
    setSelectedAbbr(abbr);
    setConfirmed(false);
  };

  const handleDropdownChange = (e) => {
    setSelectedAbbr(e.target.value);
    setConfirmed(false);
  };

  const canContinue = selectedAbbr && confirmed;

  return (
    <>
      {/* 1) Hero */}
      <section className="tdmd-book-hero">
        <div className="tdmd-container">
          <span className="tdmd-book-label">LOCATION REQUIREMENT</span>
          <h1>Confirm the state you are physically located in right now</h1>
          <p className="tdmd-book-subtitle">
            TeleDirectMD can only see patients who are physically located in a state where Parth Bhavsar, MD is licensed at the time of the video visit.
          </p>
        </div>
      </section>

      {/* 2) Map + Form */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-book-layout">
            <div className="tdmd-book-map-wrap">
              <USMap
                states={states}
                onStateClick={handleMapClick}
                selectedState={selectedAbbr}
              />
            </div>

            <div className="tdmd-book-form">
              <h2>Select Your State</h2>

              <label className="tdmd-book-dropdown-label" htmlFor="state-select">
                Current physical location
              </label>
              <select
                id="state-select"
                className="tdmd-book-dropdown"
                value={selectedAbbr}
                onChange={handleDropdownChange}
              >
                <option value="">Select your current state</option>
                {states
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((s) => (
                    <option key={s.abbr} value={s.abbr}>{s.name}</option>
                  ))}
              </select>

              <label className="tdmd-book-checkbox">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  disabled={!selectedAbbr}
                />
                <span>
                  I confirm I am physically located in the selected state during this TeleDirectMD video visit.
                </span>
              </label>

              <button
                className={`tdmd-book-cta-btn${canContinue ? '' : ' tdmd-book-cta-btn-disabled'}`}
                disabled={!canContinue}
                onClick={() => {
                  if (canContinue) {
                    window.open(ELATION_URL, '_blank', 'noopener');
                  }
                }}
              >
                Continue to booking
              </button>

              <p className="tdmd-book-fine-print">
                If you are traveling, select the state you are physically located in during the visit. TeleDirectMD does not prescribe controlled substances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) As Seen In */}
      <section className="tdmd-section tdmd-section-highlight">
        <div className="tdmd-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--tdmd-muted)', letterSpacing: '0.08em', margin: '0 0 1rem' }}>
            AS SEEN IN
          </p>
          <div className="tdmd-book-media-logos">
            <span>TIME</span>
            <span>Newsweek</span>
            <span>British GQ</span>
            <span>U.S. News</span>
            <span>HuffPost</span>
            <span>New York Post</span>
            <span>FOX News Digital</span>
            <span>Daily Mail</span>
            <span>Healthline</span>
            <span>Yahoo Health</span>
            <span>EatingWell</span>
            <span>Everyday Health</span>
            <span>Parade</span>
            <span>Men's Journal</span>
            <span>SHEfinds</span>
          </div>
        </div>
      </section>

      {/* 4) Trust section */}
      <section className="tdmd-section">
        <div className="tdmd-container">
          <div className="tdmd-book-trust-grid">
            <div className="tdmd-book-trust-item">
              <div className="tdmd-book-trust-icon">$49</div>
              <h3>Flat-Fee Pricing</h3>
              <p>No hidden fees, no subscription, no insurance required.</p>
            </div>
            <div className="tdmd-book-trust-item">
              <div className="tdmd-book-trust-icon">MD</div>
              <h3>Doctor-Only Visits</h3>
              <p>Every visit is with a licensed, board-certified physician.</p>
            </div>
            <div className="tdmd-book-trust-item">
              <div className="tdmd-book-trust-icon">Rx</div>
              <h3>Same-Day Prescriptions</h3>
              <p>Prescriptions sent to your local pharmacy after your visit.</p>
            </div>
            <div className="tdmd-book-trust-item">
              <div className="tdmd-book-trust-icon">50+</div>
              <h3>Conditions Treated</h3>
              <p>From urgent care to chronic refills to skin conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
