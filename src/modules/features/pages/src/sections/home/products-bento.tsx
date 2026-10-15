import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import type { VerticalId } from "@/modules/features/pages/src/data/verticals";

const LAYOUT: Record<VerticalId, string> = {
  subven: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
  sila: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  participacion: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  voluntariado: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  consultoria: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
};

export interface BentoVerticalCard {
  id: VerticalId;
  slug: string;
  title: string;
  body: string;
  mark: string;
  markLight?: string;
  accent: string;
}

interface ProductsBentoProps {
  title: string;
  cta: string;
  items: BentoVerticalCard[];
}

function ProductMark({
  mark,
  markLight,
  className,
}: {
  mark: string;
  markLight?: string;
  className?: string;
}) {
  if (!markLight) {
    return <img src={mark} alt="" className={cn("object-contain", className)} />;
  }

  return (
    <>
      <img src={mark} alt="" className={cn("hidden object-contain dark:block", className)} />
      <img src={markLight} alt="" className={cn("object-contain dark:hidden", className)} />
    </>
  );
}

export function ProductsBento({ title, cta, items }: ProductsBentoProps) {
  return (
    <section id="soluciones" className="border-t border-line py-24">
      <div className="container-site">
        <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
        <BentoGrid className="mt-10 lg:grid-rows-3">
          {items.map((item) => (
            <BentoCard
              key={item.id}
              name={item.title}
              description={item.body}
              href={item.slug}
              cta={cta}
              accent={item.accent}
              className={LAYOUT[item.id]}
              Icon={(props) => (
                <ProductMark mark={item.mark} markLight={item.markLight} className={props.className} />
              )}
              background={
                <ProductMark
                  mark={item.mark}
                  markLight={item.markLight}
                  className="absolute -top-16 -right-10 h-64 w-auto opacity-40"
                />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
