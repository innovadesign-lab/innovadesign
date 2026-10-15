import { PageSplit } from "@/components/ui/page-split";

interface EmptyNewsProps {
  title: string;
  lede: string;
  message: string;
  hint: string;
}

export function EmptyNews({ title, lede, message, hint }: EmptyNewsProps) {
  return (
    <PageSplit
      title={title}
      lede={lede}
      aside={<EmptyFolder />}
      panel={
        <>
          <h2 className="text-lg font-medium text-ink">{message}</h2>
          <p className="text-sm leading-[1.43] text-ink-secondary">{hint}</p>
        </>
      }
    />
  );
}

function EmptyFolder() {
  return (
    <svg
      viewBox="0 0 320 248"
      aria-hidden="true"
      className="mx-auto w-[min(100%,280px)]"
    >
      <g transform="rotate(-7 150 78)">
        <rect x="96" y="28" width="128" height="108" rx="12" className="fill-ink-muted" />
        <rect x="114" y="48" width="78" height="5" rx="2.5" className="fill-background" />
        <rect x="114" y="62" width="56" height="5" rx="2.5" className="fill-background" />
        <rect x="114" y="76" width="68" height="5" rx="2.5" className="fill-background" />
      </g>
      <g transform="rotate(5 188 86)">
        <rect x="124" y="40" width="120" height="100" rx="12" className="fill-ink-secondary" />
        <rect x="140" y="58" width="72" height="5" rx="2.5" className="fill-background" />
        <rect x="140" y="72" width="48" height="5" rx="2.5" className="fill-background" />
      </g>
      <path
        d="M40 104h86c6 0 10 4 14 12h132c14 0 24 10 24 24v70c0 16-12 26-28 26H64c-16 0-24-10-24-26v-80c0-14 10-26 24-26z"
        className="fill-ink"
      />
      <circle cx="132" cy="168" r="6" className="fill-background" />
      <circle cx="188" cy="168" r="6" className="fill-background" />
      <rect x="146" y="188" width="28" height="5" rx="2.5" className="fill-background" />
    </svg>
  );
}
