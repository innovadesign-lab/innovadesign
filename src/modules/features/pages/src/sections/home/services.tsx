interface ServiceItem {
  title: string;
  description: string;
}

interface ServicesProps {
  eyebrow: string;
  title: string;
  items: ServiceItem[];
}

export function Services({ eyebrow, title, items }: ServicesProps) {
  return (
    <section className="container-site py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
        <header>
          <p className="text-micro uppercase tracking-wider text-ink-muted">{eyebrow}</p>
          <h2 className="text-h2 mt-3 font-display text-ink">{title}</h2>
        </header>
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.title} className="grid gap-2 py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <h3 className="text-h4 font-display text-ink">{item.title}</h3>
              <p className="text-body max-w-xl text-ink-secondary">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
