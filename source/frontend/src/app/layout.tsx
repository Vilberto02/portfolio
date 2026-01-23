import type { Metadata } from "next";
import { Sofia_Sans, Slackey } from "next/font/google";
import "./globals.css";

const sofiaFont = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

const slackeyFont = Slackey({
  variable: "--font-slackey",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Vilberto 💯",
  description: "Portafolio web personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sofiaFont.variable} ${slackeyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
