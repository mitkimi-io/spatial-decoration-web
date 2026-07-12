"use client";

import {
  CloudSun,
  Download,
  Music2,
  Palette,
  Shield,
  Tv,
} from "lucide-react";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FEATURES = [
  {
    icon: CloudSun,
    title: "时间天气一览",
    description: "大号时间、日期与实时天气，图标与温度一目了然。",
  },
  {
    icon: Palette,
    title: "五套精选主题",
    description: "默认、万花筒、心动、梦幻、星际轨道，每套含循环背景与环境音乐。",
  },
  {
    icon: Music2,
    title: "环境音乐氛围",
    description: "可开关、可调音量，并显示正在播放的曲目。",
  },
  {
    icon: Shield,
    title: "防烧屏保护",
    description: "前景信息定时轮换位置，对 OLED 电视更友好。",
  },
  {
    icon: Tv,
    title: "一键设为屏保",
    description: "可作为独立 App 运行，也可设为系统屏保（DreamService）。",
  },
  {
    icon: Download,
    title: "在线更新主题",
    description: "支持远程下载与更新主题包，持续扩展氛围选择。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="section-label text-sm uppercase tracking-[0.25em]">Features</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              安静的信息展示，完整的屏保体验
            </h2>
            <p className="mt-4 text-muted">
              为 Android TV 横屏场景设计，聚焦时间、天气、主题与音乐，不打扰你的空间。
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <AnimatedContent key={feature.title} delay={index * 80}>
              <Card className="feature-card group h-full transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
