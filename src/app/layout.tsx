import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CICLO - Acompanhamento do Ciclo Menstrual",
  description: "Aplicativo para acompanhamento do ciclo menstrual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
