import { ArrowUpRight } from "lucide-react";
import { Link } from "@/modules/cores/i18n/src/config/routing";
import type { PostMeta } from "@/modules/features/blog/src/interfaces/blog.interface";

interface NewsProps {
  title: string;
  empty: string;
  viewAllLabel?: string;
  locale: string;
  posts?: PostMeta[];
}

export function News({ title, empty, viewAllLabel, locale, posts = [] }: NewsProps) {
  return (
    <section id="noticias" className="border-t border-line py-24">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[40px] font-medium leading-[1.2]">{title}</h2>
          {posts.length > 0 && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              <span>{viewAllLabel ?? title}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>

        {posts.length === 0 ? (
          <p className="mt-4 text-sm text-ink-muted">{empty}</p>
        ) : (
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-3 py-6 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
                >
                  <time dateTime={post.date} className="text-xs text-ink-muted">
                    {new Date(post.date).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                  <span>
                    <span className="block text-[17px] font-medium text-ink group-hover:underline">
                      {post.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-sm text-ink-secondary">
                      {post.excerpt}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-muted transition-colors group-hover:text-ink"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
