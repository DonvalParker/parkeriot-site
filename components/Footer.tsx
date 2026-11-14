import Image from "next/image";
import Link from "next/link";
import logo from "@/public/parkeriot-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-tight grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <Image src={logo} alt="ParkerIoT" className="h-7 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            UK-based IoT engineering — connected device development, embedded firmware,
            Raspberry Pi and Linux edge systems, remote monitoring, and field deployment
            support.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-slate-500 transition hover:text-brand-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-500 transition hover:text-brand-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-slate-500 transition hover:text-brand-700">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-500 transition hover:text-brand-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-500 transition hover:text-brand-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>
              <a href="mailto:info@parkeriot.uk" className="transition hover:text-brand-700">
                info@parkeriot.uk
              </a>
            </li>
            <li>
              <a href="tel:+447399123654" className="transition hover:text-brand-700">
                +44 (0)7399 123654
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/donvalparker"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-brand-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-tight flex flex-col gap-2 py-6 text-xs text-slate-400">
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} ParkerIoT Limited. All rights reserved.</span>
            <Link href="/privacy" className="font-medium text-slate-500 transition hover:text-brand-700">
              Privacy notice
            </Link>
            <Link href="/privacy#cookies" className="font-medium text-slate-500 transition hover:text-brand-700">
              Cookies
            </Link>
          </span>
          <p>
            ParkerIoT Limited, registered in England &amp; Wales, company no. 16308954, registered
            office 42 Mayfield Avenue, Lancaster, LA1 2PF.
          </p>
        </div>
      </div>
    </footer>
  );
}
