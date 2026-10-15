import { Link } from "@/modules/cores/i18n/src/config/routing";
import type { PostMeta } from "@/modules/features/blog/src/interfaces/blog.interface";

interface StoriesProps {
  eyebrow: string;
  title: string;
  readLabel: string;
  allLabel: string;
  locale: string;
  posts: PostMeta[];
}

export function Stories({ eyebrow, title, readLabel, allLabel, locale, posts }: StoriesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="border-y border-line bg-surface-subtle py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <header className="max-w-2xl">
            <p className="text-micro uppercase tracking-wider text-ink-muted">{eyebrow}</p>
            <h2 className="text-h2 mt-3 font-display text-ink">{title}</h2>
          </header>
          <Link href="/blog" className="text-small text-link">
            {allLabel}
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group grid gap-3 py-8 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                <time dateTime={post.date} className="text-micro text-ink-muted">
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
                <span>
                  <span className="text-h4 block font-display text-ink group-hover:underline">{post.title}</span>
                  <span className="text-small mt-2 block max-w-2xl text-ink-secondary">{post.excerpt}</span>
                </span>
                <span className="text-small text-link">{readLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
