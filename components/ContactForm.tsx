"use client";

import { useForm, ValidationError } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "mrewzbnz";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="text-xl font-semibold text-slate-900">Message sent</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thanks for reaching out. ParkerIoT will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="ParkerIoT contact form enquiry" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" type="text" placeholder="Jane Doe" required errors={state.errors} />
        <Field id="email" label="Email" type="email" placeholder="jane@company.com" required errors={state.errors} />
      </div>
      <Field id="company" label="Company" type="text" placeholder="Acme Industrial" errors={state.errors} />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>
      <ValidationError
        errors={state.errors}
        className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
      />
      <button type="submit" disabled={state.submitting} className="btn-primary w-full disabled:opacity-60">
        {state.submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  required,
  errors,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  errors: ReturnType<typeof useForm>[0]["errors"];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
      <ValidationError prefix={label} field={id} errors={errors} className="mt-1 text-sm text-red-600" />
    </div>
  );
}
