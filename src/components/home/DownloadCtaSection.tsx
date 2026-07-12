import { Code2, Download, Mail } from "lucide-react";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function DownloadCtaSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container">
        <AnimatedContent>
          <div className="cta-panel relative overflow-hidden rounded-[32px] border px-8 py-14 text-center md:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_55%)]" />
            <div className="relative">
              <ScrollReveal>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  今晚就开始，让屏幕安静下来
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted">
                  下载视界时光，在 Android TV 上体验时间、天气、主题与环境音乐融合的屏保氛围。
                </p>
              </ScrollReveal>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button>
                  <Download className="h-4 w-4" />
                  下载应用
                </Button>
                <Button variant="secondary">
                  <Code2 className="h-4 w-4" />
                  查看 GitHub
                </Button>
                <Button variant="secondary">
                  <Mail className="h-4 w-4" />
                  联系团队
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted">当前版本 v1.0.0（占位）</p>
              <p className="mt-2 text-xs text-muted/80">
                开发：田昊天 · 艺术：走洲舟 · 北京按时下班科技有限公司
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
