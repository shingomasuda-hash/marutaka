'use client';

import { useState, type FormEvent } from 'react';
import { entry } from '@/data/content';
import { submitApplication, type ApplicationPayload, type SubmitResult } from '@/lib/submitApplication';

const fieldStyles =
  'w-full rounded-[3px] border border-transparent bg-[#efefef] px-4 py-3 text-[14px] text-ink placeholder:text-black/35 focus:border-white focus:bg-white lg:text-[15px]';

export default function EntryForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setPending(true);
    setResult(null);

    const data = new FormData(form);
    const payload = Object.fromEntries(
      entry.fields.map((field) => [field.name, String(data.get(field.name) ?? '')]),
    ) as ApplicationPayload;

    const next = await submitApplication(payload);
    setResult(next);
    setPending(false);

    if (next.status === 'ok') form.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="mx-auto mt-10 w-full max-w-[520px] space-y-5 lg:mt-14 lg:max-w-none lg:space-y-7">
      {entry.fields.map((field) => {
        const id = `entry-${field.name}`;
        return (
          <div key={field.name}>
            <label htmlFor={id} className="mb-2 block text-[15px] font-bold text-white lg:text-[17px]">
              {field.label}
              {field.required ? (
                <span className="text-[#ff5b5b]" aria-hidden="true">
                  ※
                </span>
              ) : null}
              {field.required ? <span className="sr-only">（必須）</span> : null}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={id}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={field.name === 'body' ? 6 : 4}
                className={`${fieldStyles} resize-y`}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                autoComplete={'autoComplete' in field ? field.autoComplete : undefined}
                inputMode={field.type === 'tel' ? 'tel' : undefined}
                pattern={field.type === 'tel' ? '[0-9０-９\\-ー\\s()]{10,}' : undefined}
                title={
                  field.type === 'tel'
                    ? '数字とハイフンで10桁以上ご入力ください（例）080-0000-0000'
                    : undefined
                }
                className={fieldStyles}
              />
            )}
          </div>
        );
      })}

      <div className="pt-4 lg:pt-8">
        <button
          type="submit"
          disabled={pending}
          className="mx-auto block w-full max-w-[440px] rounded-[3px] bg-amber-500 px-6 py-4 text-[18px] font-bold text-white shadow-md transition-colors duration-200 hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70 lg:py-5 lg:text-xl"
        >
          {pending ? '送信中…' : entry.submitLabel}
        </button>

        <p role="status" aria-live="polite" className="mt-4 text-center text-[13px] text-white">
          {result?.status === 'ok' ? 'ご応募ありがとうございました。担当者よりご連絡いたします。' : null}
          {result?.status === 'error' ? result.message : null}
          {result?.status === 'not-configured'
            ? '送信先が未設定です。NEXT_PUBLIC_ENTRY_ENDPOINT を設定してください。'
            : null}
        </p>
      </div>
    </form>
  );
}
