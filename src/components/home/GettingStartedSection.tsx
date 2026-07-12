import { Download, Settings, Tv } from "lucide-react";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const STEPS = [
  {
    icon: Download,
    title: "安装 VisionTempus",
    description: "在 Android TV 或电视盒子上安装视界时光应用。",
  },
  {
    icon: Tv,
    title: "选择主题包",
    description: "打开应用，挑选喜欢的主题包与音量设置。",
  },
  {
    icon: Settings,
    title: "设为系统屏保",
    description: "在系统设置中将「视界时光」设为默认屏保即可。",
  },
];

export default function GettingStartedSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="section-label text-sm uppercase tracking-[0.25em]">Getting Started</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              三步开始，让屏幕慢下来
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <AnimatedContent key={step.title} delay={index * 100}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                      {index + 1}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card text-accent">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <CardTitle className="mt-4">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent className="mt-10">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            <AccordionItem value="preview">
              <AccordionTrigger>如何手动启动屏保预览？</AccordionTrigger>
              <AccordionContent>
                打开视界时光应用即可进入屏保预览。若已设为系统屏保，也可在 Android TV 的屏保设置中手动触发预览。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="update">
              <AccordionTrigger>如何更新主题？</AccordionTrigger>
              <AccordionContent>
                应用支持在线下载更新主题包。进入设置后选择主题管理，即可检查并下载最新主题内容。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimatedContent>
      </div>
    </section>
  );
}
