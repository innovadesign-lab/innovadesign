import { ProfileCard } from "@/modules/shared/ui/src/components";

export interface Person {
  name: string;
  role: string;
  description?: string;
  badge?: string;
  image?: string;
}

interface AboutProps {
  title: string;
  body: string;
  people: Person[];
  asPage?: boolean;
}

export function About({ title, body, people, asPage = false }: AboutProps) {
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="quienes" className={`${asPage ? "" : "border-t border-line"} py-24`}>
      <div className="container-site">
        <Heading className="text-[40px] font-medium leading-[1.2]">{title}</Heading>
        <p className="mt-6 max-w-[65ch] text-sm leading-[1.43] text-ink-secondary">{body}</p>
        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name}>
              <ProfileCard
                name={person.name}
                role={person.role}
                description={person.description}
                badge={person.badge}
                image={person.image ? { src: person.image, alt: person.name } : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
