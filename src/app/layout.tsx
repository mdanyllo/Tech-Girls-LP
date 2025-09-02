import type { Metadata } from "next";
import {Comfortaa} from "next/font/google";
import "./globals.css";

const OnestSans = Comfortaa({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["600"]
});

export const metadata: Metadata = {
  title: "Tech Girls",
  description: "Conheça-nos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${OnestSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
