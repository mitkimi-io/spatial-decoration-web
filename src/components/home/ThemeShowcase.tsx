"use client";

import { useState } from "react";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HOME_THEMES } from "@/data/home-themes";
import { cn } from "@/lib/utils";

function ThemeCover({
  themeId,
  coverUrl,
  alt,
  className,
}: {
  themeId: string;
  coverUrl: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-zinc-900",
        "bg-[image:var(--cover-url)] bg-cover bg-center",
        className,
      )}
      style={{ ["--cover-url" as string]: `url(${coverUrl})` }}
      aria-label={alt}
      title={`${alt} · ${coverUrl}`}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-80",
          themeId === "builtin" && "bg-gradient-to-br from-slate-600 to-zinc-900",
          themeId === "kaleidoscope" && "bg-gradient-to-br from-fuchsia-700 to-violet-950",
          themeId === "heartbeat" && "bg-gradient-to-br from-rose-700 to-red-950",
          themeId === "dream" && "bg-gradient-to-br from-indigo-700 to-blue-950",
          themeId === "stellar-orbit" && "bg-gradient-to-br from-cyan-700 to-slate-950",
        )}
      />
    </div>
  );
}

export default function ThemeShowcase() {
  const [activeId, setActiveId] = useState(HOME_THEMES[0].id);
  const activeTheme = HOME_THEMES.find((theme) => theme.id === activeId) ?? HOME_THEMES[0];

  return (
    <section id="themes" className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="section-label text-sm uppercase tracking-[0.25em]">Themes</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              五套氛围，随心切换
            </h2>
            <p className="mt-4 text-muted">
              每套主题包含循环视频或 Web 背景与环境音乐歌单，切换后即刻改变房间气质。
            </p>
          </div>
        </ScrollReveal>

        <AnimatedContent className="mt-14">
          <Tabs value={activeId} onValueChange={setActiveId}>
            <TabsList className="w-full justify-start overflow-x-auto">
              {HOME_THEMES.map((theme) => (
                <TabsTrigger key={theme.id} value={theme.id} className="shrink-0">
                  {theme.nameZh}
                </TabsTrigger>
              ))}
            </TabsList>

            {HOME_THEMES.map((theme) => (
              <TabsContent key={theme.id} value={theme.id}>
                <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                  <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                    {HOME_THEMES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={cn(
                          "min-w-[220px] rounded-2xl border p-3 text-left transition-all lg:min-w-0",
                          item.id === activeId
                            ? "border-accent/40 bg-accent-soft"
                            : "border-border bg-card hover:border-accent/25",
                        )}
                      >
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                          <ThemeCover
                            themeId={item.id}
                            coverUrl={item.coverUrl}
                            alt={item.nameZh}
                            className="h-full w-full"
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <div>
                            <div className="font-medium text-foreground">{item.nameZh}</div>
                            <div className="text-xs text-muted">{item.nameEn}</div>
                          </div>
                          <Badge variant="accent">{item.trackCount} 首</Badge>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8">
                    <div
                      className={cn(
                        "absolute inset-0 opacity-30 transition-opacity duration-700",
                        activeTheme.id === "builtin" && "bg-gradient-to-br from-slate-600 to-zinc-950",
                        activeTheme.id === "kaleidoscope" && "bg-gradient-to-br from-fuchsia-700 to-violet-950",
                        activeTheme.id === "heartbeat" && "bg-gradient-to-br from-rose-700 to-red-950",
                        activeTheme.id === "dream" && "bg-gradient-to-br from-indigo-700 to-blue-950",
                        activeTheme.id === "stellar-orbit" && "bg-gradient-to-br from-cyan-700 to-slate-950",
                      )}
                    />
                    <div className="relative">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                        <ThemeCover
                          themeId={activeTheme.id}
                          coverUrl={activeTheme.coverUrl}
                          alt={activeTheme.nameZh}
                          className="h-full w-full transition-transform duration-700 hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{activeTheme.nameZh}</h3>
                        <Badge variant="accent">{activeTheme.trackCount} 首环境音乐</Badge>
                      </div>
                      <p className="mt-3 max-w-2xl text-foreground/80">{activeTheme.description}</p>
                      <p className="mt-2 text-sm text-muted">
                        封面占位路径：{activeTheme.coverUrl}（后续替换 CDN）
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedContent>
      </div>
    </section>
  );
}
