import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/top-bar";
import { BottomNav } from "@/components/bottom-nav";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bansud Citizen Hub",
  description: "Public information hub for permits, requirements, services, and municipal announcements in Bansud.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bansud Citizen Hub",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased selection:bg-primary/15 selection:text-primary`}
    >
      <body className="min-h-full bg-muted text-foreground">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-background shadow-2xl lg:border-x">
          <TopBar />
          <main className="flex-1 pb-24 pt-18 md:pb-8">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
