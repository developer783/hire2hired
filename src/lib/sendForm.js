// Sends website form submissions to the team inbox via FormSubmit (https://formsubmit.co).
// No backend or account needed; works on any static host.
//
// One-time setup: the FIRST submission triggers an activation email to FORM_INBOX.
// Click "Activate Form" in that email; until then submissions are not delivered.
export const FORM_INBOX = 'support@hire2hired.com';

const ENDPOINT = `https://formsubmit.co/ajax/${FORM_INBOX}`;

/** Largest attachment we send (keeps uploads well inside the form service's limits). */
export const MAX_ATTACHMENT_MB = 5;

/**
 * @param {string} subject  Email subject line
 * @param {Object} fields   Label -> value pairs shown in the email (empty values are skipped)
 * @param {string} [replyTo] Visitor's email, so "Reply" in the inbox goes to them
 * @param {File}   [attachment] Optional file to attach to the email (e.g. a resume)
 */
export async function sendForm(subject, fields, replyTo, attachment) {
  const body = { _subject: subject, _template: 'table', _captcha: 'false' };
  if (replyTo) body._replyto = replyTo;
  for (const [label, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && String(value).trim() !== '') body[label] = value;
  }

  let request;
  if (attachment) {
    // Files must go as multipart form data; the browser sets the Content-Type boundary itself.
    const fd = new FormData();
    for (const [k, v] of Object.entries(body)) fd.append(k, v);
    fd.append('attachment', attachment, attachment.name);
    request = { method: 'POST', headers: { Accept: 'application/json' }, body: fd };
  } else {
    request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    };
  }

  const res = await fetch(ENDPOINT, request);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== 'true') {
    throw new Error(data.message || `Form service responded with ${res.status}`);
  }
  return data;
}
