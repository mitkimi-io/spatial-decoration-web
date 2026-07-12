import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const DEVICES = ["Android TV", "电视盒子", "部分投影设备"];
const TECH_BADGES = ["API 23+", "Leanback", "DreamService"];

export default function CompatibilitySection() {
  return (
    <section className="border-y border-border bg-background py-16 transition-colors duration-300 md:py-20">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">设备与兼容</h2>
              <p className="mt-3 max-w-2xl text-muted">
                横屏优化，面向 Android TV 大屏体验；支持系统 WebView 与兼容方案，适配常见客厅设备。
              </p>
            </div>
            <AnimatedContent>
              <div className="flex flex-wrap gap-2">
                {DEVICES.map((device) => (
                  <Badge key={device}>{device}</Badge>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </ScrollReveal>

        <AnimatedContent className="mt-8">
          <div className="flex flex-wrap gap-2">
            {TECH_BADGES.map((badge) => (
              <Badge key={badge} variant="accent">
                {badge}
              </Badge>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
