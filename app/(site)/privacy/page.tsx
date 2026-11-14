import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How ParkerIoT Limited uses personal information collected through parkeriot.uk, including the contact form, hosting logs, and cookies.",
};

const updated = "14 November 2026";

export default function PrivacyPage() {
  return (
    <article className="bg-grid">
      <div className="container-tight py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.035em] text-slate-900 sm:text-5xl">
            Privacy notice
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated {updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            This notice explains how ParkerIoT Limited uses personal information collected through
            parkeriot.uk. It covers the contact form, emails you send us, and the ordinary running
            of the website.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">Who we are</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The controller is ParkerIoT Limited, registered in England &amp; Wales, company no.
            16308954, registered office 42 Mayfield Avenue, Lancaster, LA1 2PF.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Email:{" "}
            <a href="mailto:info@parkeriot.uk" className="font-medium text-brand-700 underline">
              info@parkeriot.uk
            </a>
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We have not appointed a data protection officer. Use the email address above for any
            privacy question, correction, or deletion request.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            What we collect
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            If you use the contact form or email us, we collect the details you choose to send:
            your name, email address, company name if you include one, and your message. The form
            is optional. You can email us instead.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            When you open the site, our host receives the technical data needed to deliver the
            pages: IP address, browser type, and the page requested. We do not use that data to
            identify you or to build a marketing profile.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Please do not send special-category information (such as health data) in a message. We
            do not ask for it.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            Why we use it
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We use enquiry details to read your message, reply, and keep a record of that
            conversation. Where you are asking about work we might do for you, we do this to take
            steps at your request before a contract (UK GDPR Article 6(1)(b)). For other
            enquiries we rely on our legitimate interest in answering genuine questions about our
            engineering services (Article 6(1)(f)).
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We do not add you to a mailing list. We do not send marketing email unless you later
            ask us to.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We use connection logs to keep the site available and secure, and to diagnose faults.
            That is our legitimate interest in running a reliable website.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            Who else receives it
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We do not sell personal information.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Contact-form submissions are handled by Formspree, Inc., which stores them and emails
            them to us so the form can work. Formspree hosts those submissions on Amazon Web
            Services in the United States. Formspree&apos;s privacy policy is at{" "}
            <a
              href="https://formspree.io/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 underline"
            >
              formspree.io/legal/privacy-policy
            </a>
            .
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The website is hosted by Vercel, Inc., which processes connection logs, including IP
            address, to deliver and protect the site.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We may also disclose information if the law requires it, or where we need it to
            establish, exercise, or defend a legal claim.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            Transfers outside the UK
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Formspree and Vercel are based in the United States, so an enquiry and ordinary
            connection logs are processed there. Formspree states that it uses Standard
            Contractual Clauses for those transfers. Vercel&apos;s customer terms include a
            data-processing agreement with UK transfer safeguards. Ask us if you want a copy of
            the safeguards we rely on.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            How long we keep it
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We keep contact-form messages and the emails that follow for up to 24 months after our
            last contact with you. If the enquiry becomes a client project, we keep the records
            that project needs for as long as the work, and any legal or accounting duty that
            follows, requires. We then delete them, unless we have to keep them for a legal claim.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Hosting logs are kept only for the short period our host retains them for security and
            operations. They are not a marketing record.
          </p>

          <h2
            id="cookies"
            className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-[-0.035em] text-slate-900"
          >
            Cookies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Ordinary browsing sets no cookie. The only cookie is{" "}
            <span className="font-medium text-slate-800">maintenance_bypass</span>. It is strictly
            necessary, set only from a private maintenance link, lasts 7 days, and is not used for
            tracking.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">Your rights</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">You can ask us to:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
            <li>confirm whether we hold information about you, and for a copy of it</li>
            <li>correct it</li>
            <li>delete it</li>
            <li>restrict how we use it</li>
            <li>object to use that is based on legitimate interests</li>
            <li>
              receive information you gave us, in a portable format, where the request relates to
              steps towards a contract
            </li>
          </ul>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We do not use your information for automated decisions that have legal or similarly
            significant effects.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Email{" "}
            <a href="mailto:info@parkeriot.uk" className="font-medium text-brand-700 underline">
              info@parkeriot.uk
            </a>{" "}
            to use these rights. We may need to confirm it is you before we act. We respond within
            one month.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">Complaints</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            If you are unhappy with how we handle your information, email us first. You can also
            complain to the Information Commissioner&apos;s Office, the UK regulator for personal
            data, at{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 underline"
            >
              ico.org.uk/make-a-complaint
            </a>
            , or by post to Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-slate-900">
            Changes to this notice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            If we change how we use personal information, we will update this page and the date at
            the top.
          </p>

          <p className="mt-12 text-sm text-slate-500">
            <Link href="/contact" className="font-medium text-brand-700 underline">
              Contact ParkerIoT
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
