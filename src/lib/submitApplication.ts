/**
 * Form submission adapter.
 *
 * No delivery service was specified for this build, so nothing is wired up:
 * out of the box the form validates, then reports that the endpoint is not
 * configured. It never posts applicant data anywhere by default.
 *
 * To connect it later, either
 *   a) set NEXT_PUBLIC_ENTRY_ENDPOINT to a URL that accepts a JSON POST, or
 *   b) replace the body of `submitApplication` with your own call
 *      (Route Handler, form service, CRM SDK, ...).
 *
 * Nothing else in the UI needs to change — EntryForm only knows about this
 * function and the SubmitResult shape.
 */

export type ApplicationPayload = {
  name: string;
  kana: string;
  gender: string;
  birthday: string;
  tel: string;
  email: string;
  position: string;
  career: string;
  body: string;
};

export type SubmitResult =
  | { status: 'ok' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string };

const endpoint = process.env.NEXT_PUBLIC_ENTRY_ENDPOINT;

export async function submitApplication(payload: ApplicationPayload): Promise<SubmitResult> {
  if (!endpoint) {
    return { status: 'not-configured' };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { status: 'error', message: `送信に失敗しました（${response.status}）` };
    }

    return { status: 'ok' };
  } catch {
    return { status: 'error', message: '通信エラーが発生しました。時間をおいて再度お試しください。' };
  }
}
