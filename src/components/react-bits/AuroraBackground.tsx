"use client";

import { cn } from "@/lib/utils";

type AuroraBackgroundProps = {
  className?: string;
};

export default function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_45%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--hero-fade) 75%)",
        }}
      />
    </div>
  );
}
