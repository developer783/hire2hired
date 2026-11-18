// Sends website form submissions to the team inbox via FormSubmit (https://formsubmit.co).
// No backend or account needed; works on any static host.
//
// One-time setup: the FIRST submission triggers an activation email to FORM_INBOX.
// Click "Activate Form" in that email; until then submissions are not delivered.
export const FORM_INBOX = 'support@hire2hired.com';

const ENDPOINT = `https://formsubmit.co/ajax/${FORM_INBOX}`;

/**
 * @param {string} subject  Email subject line
 * @param {Object} fields   Label -> value pairs shown in the email (empty values are skipped)
 * @param {string} [replyTo] Visitor's email, so "Reply" in the inbox goes to them
 */
export async function sendForm(subject, fields, replyTo) {
  const body = { _subject: subject, _template: 'table', _captcha: 'false' };
  if (replyTo) body._replyto = replyTo;
  for (const [label, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && String(value).trim() !== '') body[label] = value;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== 'true') {
    throw new Error(data.message || `Form service responded with ${res.status}`);
  }
  return data;
}
