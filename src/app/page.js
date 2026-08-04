//Importando o componente Quadrado para ser usado na página Home.
import Quadrado from "@/components/quadrados/quadrado"; // No Next.js, por padrão, o "@" aponta para a pasta src, facilitando o caminho.

//Importando o componente Header para ser usado na página Home.
import Header from "@/components/headers/header"; // Importando o componente Header para ser usado na página Home.

import QuadradoPropriedades from "@/components/quadrados/quadrado_propriedades"; // Importando o componente QuadradoPropiedades para ser usado na página Home.

import Link from "next/link"; // Importando o componente Link do Next.js para navegação entre páginas.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <p className="text-2xl font-bold">Hello, World!</p>
      <Quadrado /> {/* Chamando o componente Quadrado dentro da página Home. */}
      <Quadrado /> {/* Chamando o componente Quadrado novamente para mostrar que ele pode ser reutilizado. */}
      <QuadradoPropriedades cor="yellow" tamanho="100px" texto="Posso colocar o que eu quiser nos campos." /> {/* Chamando o componente QuadradoPropriedades com propriedades específicas. */}
      <Link href="/sobre">Ir para a página Sobre</Link> {/* Link para a página Sobre. */}
    </main>
  );
}
