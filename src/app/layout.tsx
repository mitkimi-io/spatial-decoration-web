import type { Metadata } from "next";
import "@apron-design/react/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spatial Decoration",
  description: "Spatial Decoration Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
