import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/header"; // Importando o componente Header para ser usado na página Home.
import Footer from "@/components/footers/footer_principal"; // Importando o componente Footer para ser usado na página Home.

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lion-School",
  description: "Projeto de estudo do framework Next.js, utilizando o conceito de componentes e propriedades.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
