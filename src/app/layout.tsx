import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex portfolio",
  description: "Portfolio of Alex, software engineer, tech enthusiast and marketing specialist.",
  icons: {
    icon: "/favicon.ico", // or "/icon.png"
  },
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/authors/avatar-8.jpg", // Path to your OG image in /public
  //       width: 1200,
  //       height: 630,
  //       alt: "Alex Portfolio Preview",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: ["/images/authors/avatar-8.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          flex min-h-screen flex-col font-sans
          ${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
        
      </body>
    </html>
  );
}
