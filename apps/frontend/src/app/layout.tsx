import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vilberto_ | Desarrollo de aplicaciones web y móviles",
  description:
    "Portafolio de Vilberto: diseño y desarrollo de aplicaciones web y móviles, combinando buenas experiencias e ingeniería de software.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vilberto_ | Desarrollo de aplicaciones web y móviles",
    description:
      "Proyectos de diseño de producto y desarrollo de aplicaciones web y móviles, creados con claridad e intención.",
    locale: "es_PE",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilberto_ | Desarrollo de aplicaciones web y móviles",
    description:
      "Diseño de producto e ingeniería de software para aplicaciones web y móviles.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-419" data-theme="dark" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          id="portfolio-theme-init"
          dangerouslySetInnerHTML={{ __html: 'try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="light"?"light":"dark"}catch{}' }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable} min-h-full bg-surface font-primary text-ink antialiased`}
      >
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  );
}
