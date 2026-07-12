"use client";

import { Download, Sparkles } from "lucide-react";
import AuroraBackground from "@/components/react-bits/AuroraBackground";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TvMockup from "./TvMockup";

const TRUST_BADGES = ["Android TV", "屏保模式", "中英文", "防烧屏"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      <AuroraBackground />
      <div className="container relative py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              VisionTempus · Android TV 屏保
            </div>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-geist-sans)] text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              让电视，成为房间里的时钟与风景
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
              视界时光是一款 Android TV 屏保应用，在大屏上展示时间、日期与天气，搭配沉浸式动态背景与环境音乐，让屏幕安静下来。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                <Download className="h-4 w-4" />
                下载 APK
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document.getElementById("themes")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                查看主题
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </AnimatedContent>

          <AnimatedContent delay={150}>
            <TvMockup />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
