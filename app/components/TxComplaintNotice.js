// Texas Medical Board complaint notice link, required for telemedicine providers
// by 22 TAC 177.2(c): "on a prominently displayed link on the provider website",
// in no less than 10-point font, with no alterations to the notice language.
// The notice itself is the board's own poster text (English and Spanish), kept
// unaltered at /legal/texas-medical-board-complaint-notice.pdf. Render this block
// only when state.abbr === 'TX'; the site-wide footer also links the notice.
export const TX_COMPLAINT_NOTICE_HREF = '/legal/texas-medical-board-complaint-notice.pdf';

export function TxComplaintNoticeLink() {
  return (
    <p
      className="tdmd-tx-complaint-notice"
      style={{ margin: '0.75rem 0 0 0', fontSize: '0.95rem' }}
    >
      Texas patients:{' '}
      <a
        href={TX_COMPLAINT_NOTICE_HREF}
        style={{ color: 'var(--tdmd-teal, #14B8A6)', fontWeight: 600 }}
      >
        Texas Medical Board Notice Concerning Complaints (English and Spanish)
      </a>
    </p>
  );
}
