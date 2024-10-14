import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Portafolio Hector Archer", 
  description: "Portafolio Hector Archer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Portafolio | Hector Archer</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
