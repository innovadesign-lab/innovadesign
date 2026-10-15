"use client";

import { useEffect, useState } from "react";
import { Badge, ImageFrame } from "@/modules/shared/ui/src/components";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import type { PostMeta } from "@/modules/features/blog/src/interfaces/blog.interface";

const STUDIO = "estudio";
const NOTES = "notas";

interface BlogListProps {
  posts: PostMeta[];
  locale: string;
  emptyLabel: string;
  labels: {
    all: string;
    studio: string;
    notes: string;
    readMore: string;
  };
}

function categoryFromLocation() {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("categoria");
}

export function BlogList({ posts, locale, emptyLabel, labels }: BlogListProps) {
  const [categoria, setCategoria] = useState<string | null>(null);

  useEffect(() => {
    const apply = () => setCategoria(categoryFromLocation());
    apply();
    window.addEventListener("popstate", apply);
    return () => window.removeEventListener("popstate", apply);
  }, []);

  const visible =
    categoria === STUDIO
      ? posts.filter((post) => post.category === STUDIO)
      : categoria === NOTES
        ? posts.filter((post) => post.category === NOTES)
        : posts;

  const filters = [
    { value: null, label: labels.all, active: categoria !== STUDIO && categoria !== NOTES },
    { value: STUDIO, label: labels.studio, active: categoria === STUDIO },
    { value: NOTES, label: labels.notes, active: categoria === NOTES },
  ];

  return (
    <>
      <nav aria-label={labels.all} className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Link
            key={filter.label}
            href={filter.value ? `/blog?categoria=${filter.value}` : "/blog"}
            className={`btn ${filter.active ? "btn-primary" : "btn-secondary"} px-5 py-2.5 text-small`}
            aria-pressed={filter.active}
            onClick={() => setCategoria(filter.value)}
          >
            {filter.label}
          </Link>
        ))}
      </nav>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card group flex flex-col overflow-hidden transition hover:border-ink"
          >
            {post.image && (
              <ImageFrame src={post.image.src} alt={post.image.alt} width={1600} height={900} />
            )}
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <time dateTime={post.date} className="text-micro text-ink-muted">
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <Badge>{post.category === STUDIO ? labels.studio : labels.notes}</Badge>
              </div>
              <h2 className="text-h4 font-display text-ink">{post.title}</h2>
              <p className="text-small text-ink-secondary">{post.excerpt}</p>
              <span className="text-small mt-auto text-link">{labels.readMore}</span>
            </div>
          </Link>
        ))}
      </div>

      {visible.length === 0 && <p className="text-body text-ink-secondary">{emptyLabel}</p>}
    </>
  );
}
