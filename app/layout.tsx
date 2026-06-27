import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alvin Fujito",
    template: "%s | Alvin Fujito",
  },
  description: "Software engineer based in Sydney, Australia.",
  metadataBase: new URL("https://alvinfujito.com"),
  openGraph: {
    siteName: "Alvin Fujito",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),d=document.documentElement;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else if(t==='light'){d.classList.add('light')}})()` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}
      >
        <div className="max-w-2xl mx-auto px-6 py-12">
          <header className="mb-16">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="font-semibold text-lg tracking-tight hover:opacity-75 transition-opacity"
              >
                Alvin Fujito
              </Link>
              <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
                <Link
                  href="/about"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/places"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Places
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Blog
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-400 dark:text-neutral-600">
            <p>© 2026 Alvin Fujito</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
