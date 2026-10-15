"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

interface PageSplitProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  aside: ReactNode;
  panel: ReactNode;
  className?: string;
}

export function PageSplit({ eyebrow, title, lede, aside, panel, className }: PageSplitProps) {
  return (
    <section className={cn("relative w-full overflow-hidden py-20", className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="inline-flex items-center rounded-full border border-line px-4 py-1.5"
            >
              <span className="text-sm font-medium text-ink">{eyebrow}</span>
            </motion.div>
          ) : null}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className="text-[40px] font-medium leading-[1.2] text-ink"
          >
            {title}
          </motion.h1>
          {lede ? (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
              className="max-w-md text-sm leading-[1.43] text-ink-secondary"
            >
              {lede}
            </motion.p>
          ) : null}
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
          >
            {aside}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease: smoothEase }}
            className="flex flex-col gap-5 rounded-2xl border border-line bg-elevated p-6 sm:p-8"
          >
            {panel}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
