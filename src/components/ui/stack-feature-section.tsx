"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/modules/cores/i18n/src/config/routing";

export interface OrbitProduct {
  id: string;
  name: string;
  mark: string;
  markLight?: string;
}

interface FeatureSectionProps {
  kicker: string;
  title: string;
  lede: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  products: OrbitProduct[];
}

const RINGS: { count: number; diameter: string; duration: number }[] = [
  { count: 2, diameter: "46%", duration: 56 },
  { count: 3, diameter: "82%", duration: 88 },
];

function ProductMark({
  mark,
  markLight,
}: {
  mark: string;
  markLight?: string;
}) {
  if (!markLight) {
    return <img src={mark} alt="" className="h-9 w-9 object-contain" />;
  }

  return (
    <>
      <img src={mark} alt="" className="hidden h-9 w-9 object-contain dark:block" />
      <img src={markLight} alt="" className="h-9 w-9 object-contain dark:hidden" />
    </>
  );
}

function MarkDisc({ product }: { product: OrbitProduct }) {
  return (
    <span className="flex size-16 items-center justify-center rounded-full border border-line bg-elevated">
      <ProductMark mark={product.mark} markLight={product.markLight} />
    </span>
  );
}

function OrbitStage({
  products,
  playing,
}: {
  products: OrbitProduct[];
  playing: boolean;
}) {
  const playState = playing ? "running" : "paused";
  let cursor = 0;

  return (
    <div className="relative size-full motion-reduce:hidden">
      <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-elevated">
        <img src="/innovadesign/mark.webp" alt="" className="h-12 w-12 object-contain" />
      </div>

      {RINGS.map((ring) => {
        const slice = products.slice(cursor, cursor + ring.count);
        cursor += ring.count;
        const step = (2 * Math.PI) / ring.count;
        const start = Math.PI - ((ring.count - 1) * step) / 2;

        return (
          <div
            key={ring.diameter}
            className="absolute top-1/2 left-1/2"
            style={{
              width: ring.diameter,
              height: ring.diameter,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="orbit-ring size-full rounded-full border border-dotted border-line"
              style={{
                animation: `orbit-spin ${ring.duration}s linear infinite`,
                animationPlayState: playState,
              }}
            >
              {slice.map((product, index) => {
                const angle = start + index * step;
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);

                return (
                  <div
                    key={product.id}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="orbit-mark"
                      style={{
                        animation: `orbit-counter ${ring.duration}s linear infinite`,
                        animationPlayState: playState,
                      }}
                    >
                      <MarkDisc product={product} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FeatureSection({
  kicker,
  title,
  lede,
  body,
  primaryCta,
  secondaryCta,
  products,
}: FeatureSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-spin, .orbit-counter { animation: none !important; }
        }
      `}</style>

      <div className="container-site grid w-full items-center gap-8 py-24 lg:grid-cols-2 lg:gap-6">
        <div>
          <p className="text-sm font-medium text-ink-muted">{kicker}</p>
          <h1 className="mt-4 max-w-[18ch] text-[28px] font-medium leading-[1.2] text-balance sm:text-[40px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[40ch] text-[22px] font-medium leading-[1.2]">{lede}</p>
          <p className="mt-4 max-w-[65ch] text-sm leading-[1.43] text-ink-secondary">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/quienes-somos" className="btn btn-primary">
              {primaryCta}
            </Link>
            <Link href="/contacto" className="btn border border-line bg-elevated text-ink">
              {secondaryCta}
            </Link>
          </div>
        </div>

        <div
          ref={stageRef}
          className="relative h-72 overflow-hidden sm:h-80 lg:h-[34rem]"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 aspect-square w-[28rem] -translate-x-1/2 sm:w-[34rem] lg:top-1/2 lg:left-auto lg:right-0 lg:w-[50rem] lg:-translate-y-1/2 lg:translate-x-[46%]">
            <OrbitStage products={products} playing={playing} />
          </div>

          <ul className="hidden h-full items-center justify-center gap-4 motion-reduce:flex">
            {products.map((product) => (
              <li key={product.id}>
                <MarkDisc product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
