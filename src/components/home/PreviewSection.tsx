import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import TvMockup from "./TvMockup";

export default function PreviewSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <p className="section-label text-sm uppercase tracking-[0.25em]">Preview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              大屏上的层次，一眼就能读懂
            </h2>
            <p className="mt-4 text-muted">
              时间最大、日期次之，天气与正在播放曲目依次呈现。动态背景在后方缓慢流动，前景信息保持清晰可读。
            </p>
            <div className="mt-8 space-y-3 text-sm text-foreground/80">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">
                  1
                </span>
                <span>大号时间</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">
                  2
                </span>
                <span>日期</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">
                  3
                </span>
                <span>天气行（图标 + 温度）</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs text-accent">
                  4
                </span>
                <span>正在播放（可选显示）</span>
              </div>
            </div>
            <p className="mt-8 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted">
              按遥控器确认键打开设置 · 可切换主题与音量
            </p>
          </ScrollReveal>

          <AnimatedContent delay={120}>
            <TvMockup />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
