"use client";

import { useEffect, useState } from "react";
import Threads from "@/components/react-bits/Threads";
import { cn } from "@/lib/utils";
import "./ScreenSaverDisplay.scss";

type ScreenSaverDisplayProps = {
  className?: string;
};

const WEEKDAYS = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

function formatScreenTime(date: Date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatScreenDate(date: Date) {
  return `${date.getMonth() + 1}月${date.getDate()}日${WEEKDAYS[date.getDay()]}`;
}

export default function ScreenSaverDisplay({ className }: ScreenSaverDisplayProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={cn("screen-saver-display", className)}>
      <Threads
        className="screen-saver-display__threads"
        color={[1, 1, 1]}
        amplitude={1}
        distance={0.12}
        enableMouseInteraction={false}
      />

      <div className="screen-saver-display__content">
        <p className="screen-saver-display__time">{formatScreenTime(now)}</p>
        <p className="screen-saver-display__date">{formatScreenDate(now)}</p>

        <div className="screen-saver-display__weather">
          <span className="screen-saver-display__weather-icon" aria-hidden>
            sunny
          </span>
          <span>26°C</span>
        </div>
      </div>
    </div>
  );
}
