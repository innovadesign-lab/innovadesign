import { STUDIO } from "@/modules/cores/site/src/config/site";

interface ContactBandProps {
  title: string;
}

export function ContactBand({ title }: ContactBandProps) {
  return (
    <section id="contacto" className="border-t border-line py-24">
      <div className="container-site">
        <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a href={`mailto:${STUDIO.email}`} className="text-link">
              {STUDIO.email}
            </a>
          </li>
          <li>
            <a href={STUDIO.instagram} className="text-link">
              {STUDIO.instagramHandle}
            </a>
          </li>
          <li className="text-ink-secondary">{STUDIO.facebook}</li>
          <li>
            <a href={STUDIO.phoneHref} className="text-link">
              {STUDIO.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
