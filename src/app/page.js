import Link from "next/link"; // Importando o componente Link do Next.js para navegação entre páginas.

// importando o componente Image do Next.js para otimização de imagens
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col align-center p-[6vh] bg-white gap-[2vh]">
      <text className="text-center text-[9vw] text-black">Escolha um <span className="text-[#3347B0]">curso</span> <br/> para gerenciar</text>
      <Image 
          src="/studant.svg"
          alt="Logo do site"
          width={500}
          height={500}
          className="h-[60vh] w-auto"
      />
      
    </div>
  );
}
