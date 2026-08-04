import Link from "next/link"; // Importando o componente Link do Next.js para navegação entre páginas.

export default function Sobre() {
  return (
    <main>
      <h1>Página Sobre</h1>
      <Link href="/">Voltar para a página Home</Link> {/* Link para voltar à página Home. */}
    </main>
  );
}