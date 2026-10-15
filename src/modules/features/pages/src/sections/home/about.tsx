interface Person {
  name: string;
  role: string;
}

interface AboutProps {
  title: string;
  body: string;
  people: Person[];
}

export function About({ title, body, people }: AboutProps) {
  return (
    <section id="quienes" className="border-t border-line py-24">
      <div className="container-site">
        <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
        <p className="mt-6 max-w-[65ch] text-sm leading-[1.43] text-ink-secondary">{body}</p>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {people.map((person) => (
            <li key={person.name}>
              <p className="text-[17px] font-medium leading-[1.18]">{person.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
