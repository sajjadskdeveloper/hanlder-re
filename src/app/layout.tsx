import type { Metadata } from "next";
import "./globals.css";
import { ElevenLabsProvider } from "@/contexts/ElevenLabsContext";

export const metadata: Metadata = {
  title: "Handler - Real Estate Services",
  description: "Discover exceptional properties with handler. Expert real estate services for buying, selling, and investing. Find your dream home today.",
  keywords: "real estate, property, homes for sale, real estate agent, property management, investment consulting, handler",
  authors: [{ name: "Handler" }],
  openGraph: {
    title: "Handler - Real Estate Services",
    description: "Discover exceptional properties with handler. Expert real estate services for buying, selling, and investing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handler - Real Estate Services",
    description: "Discover exceptional properties with handler. Expert real estate services for buying, selling, and investing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ElevenLabsProvider>
          {children}
        </ElevenLabsProvider>
      </body>
    </html>
  );
}
