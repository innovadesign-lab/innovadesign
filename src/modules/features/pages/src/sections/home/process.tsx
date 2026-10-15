interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export function Process({ eyebrow, title, steps }: ProcessProps) {
  return (
    <section className="container-site py-20 lg:py-28">
      <header className="max-w-2xl">
        <p className="text-micro uppercase tracking-wider text-ink-muted">{eyebrow}</p>
        <h2 className="text-h2 mt-3 font-display text-ink">{title}</h2>
      </header>
      <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="bg-surface p-6">
            <p className="text-micro text-ink-muted">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="text-h4 mt-4 font-display text-ink">{step.title}</h3>
            <p className="text-small mt-3 text-ink-secondary">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
