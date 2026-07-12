import { cn } from "@/lib/utils";
import ScreenSaverDisplay from "./ScreenSaverDisplay";

type ScreenSaverUIProps = {
  className?: string;
};

export default function ScreenSaverUI({ className }: ScreenSaverUIProps) {
  return (
    <ScreenSaverDisplay className={cn("absolute inset-0 h-full w-full", className)} />
  );
}
