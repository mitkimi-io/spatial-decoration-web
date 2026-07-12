import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "视界时光",
  description: "视界时光",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('THEME');
                const root = document.documentElement;
                const body = document.body;
                if (savedTheme === 'dark') {
                  root.classList.add('dark');
                  root.classList.remove('light');
                  body.setAttribute('apron-theme', 'dark');
                } else if (savedTheme === 'light') {
                  root.classList.add('light');
                  root.classList.remove('dark');
                  body.removeAttribute('apron-theme');
                } else {
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (systemPrefersDark) {
                    root.classList.add('dark');
                    body.setAttribute('apron-theme', 'dark');
                  } else {
                    root.classList.remove('dark');
                    body.removeAttribute('apron-theme');
                  }
                  root.classList.remove('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
