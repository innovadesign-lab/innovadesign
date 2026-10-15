import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { STUDIO } from "@/modules/cores/site/src/config/site";

interface ContactBandProps {
  title: string;
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function ContactBand({ title }: ContactBandProps) {
  return (
    <section id="contacto" className="border-t border-line py-24">
      <div className="container-site">
        <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a
              href={`mailto:${STUDIO.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-link transition-colors hover:text-ink"
            >
              <Mail size={16} aria-hidden="true" />
              <span>{STUDIO.email}</span>
            </a>
          </li>
          <li>
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-link transition-colors hover:text-ink"
            >
              <InstagramIcon size={16} />
              <span>{STUDIO.instagramHandle}</span>
              <ArrowUpRight size={14} className="text-ink-muted" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={STUDIO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-link transition-colors hover:text-ink"
            >
              <FacebookIcon size={16} />
              <span>{STUDIO.facebook}</span>
              <ArrowUpRight size={14} className="text-ink-muted" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={STUDIO.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-link transition-colors hover:text-ink"
            >
              <Phone size={16} aria-hidden="true" />
              <span>{STUDIO.phone}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
