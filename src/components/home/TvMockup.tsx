"use client";

import { cn } from "@/lib/utils";
import ScreenSaverUI from "./ScreenSaverUI";

type TvMockupProps = {
  className?: string;
};

export default function TvMockup({ className }: TvMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-3xl", className)}>
      <div className="overflow-hidden rounded-[10px] bg-[#141414] shadow-[0_28px_56px_-16px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06]">
        <div className="p-2 pb-0">
          <div className="relative aspect-video overflow-hidden rounded-[7px] bg-black ring-1 ring-black/80">
            <ScreenSaverUI />
          </div>
        </div>

        <div className="flex flex-col items-center px-2 pb-2.5 pt-2.5">
          <div className="mb-2 h-[3px] w-9 rounded-full bg-[#0a0a0a] ring-1 ring-white/[0.04]" aria-hidden />
          <div
            className="h-[5px] w-[28%] min-w-[3.25rem] max-w-[6.5rem] rounded-[2px] bg-gradient-to-b from-[#5a5a5a] via-[#3d3d3d] to-[#2a2a2a] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]"
            aria-hidden
          />
        </div>
      </div>

      <div className="mx-auto mt-3 h-2 w-[36%] rounded-full bg-black/25 blur-xl" aria-hidden />
    </div>
  );
}
