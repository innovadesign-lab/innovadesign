interface NewsProps {
  title: string;
  empty: string;
}

export function News({ title, empty }: NewsProps) {
  return (
    <section id="noticias" className="border-t border-line py-24">
      <div className="container-site">
        <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
        <p className="mt-4 text-sm text-ink-muted">{empty}</p>
      </div>
    </section>
  );
}
