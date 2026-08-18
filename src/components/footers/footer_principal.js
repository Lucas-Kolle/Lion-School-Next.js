// importando o componente Image do Next.js para otimização de imagens
import Image from "next/image" 

//Criando um componete chamado footer. Um componente é uma função que retorna um elemento HTML.
export default function Footer() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
    O default significa que este é o componente principal desse arquivo. */
    return (
        <footer className="h-[55vh] bg-[#3347B0] p-[5vh] flex flex-col items-center gap-[4vh]">
            <div className="flex flex-col items-center justify-center gap-[2vh]">
                <div className="flex gap-[2vw]">
                    <Image 
                        src="/logo-telefone.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[3.5vh] w-auto"
                    />
                    <text className="text-[3vh]">(11) 4774-4700</text>
                </div>
                <div className="flex gap-[2vw]">
                    <Image 
                        src="/logo-email.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[3.5vh] w-auto"
                    />
                    <text className="text-[3vh]">lionschool@gmail.com</text>
                </div>
                <div className="flex gap-[2vw]">
                    <Image 
                        src="/logo-mapa.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[3.5vh] w-auto"
                    />
                    <text className="text-[3vh]">Rua tcc, 211,  Centro, Jandira</text>
                </div>
            </div>

            <div className="flex gap-[6vw]">
                <div className="h-[9.5vh] w-[9.5vh] border rounded-full border-[#FFFFFF]">
                    <Image 
                        src="/logo-youtube.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[6vh] w-auto"
                    />
                </div>            
                <div>
                    <Image 
                        src="/logo-twitter.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[6vh] w-auto"
                    />
                </div>            
                <div>
                    <Image 
                        src="/logo-instagram.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[6vh] w-auto"
                    />
                </div>            
                <div>
                    <Image 
                        src="/logo-facebook.svg"
                        alt="Logo do site"
                        width={500}
                        height={500}
                        className="h-[6vh] w-auto"
                    />
                </div>
            </div>

            <text className="text-[2.8vh]">Copyright © 2026 | Fernando Leonid</text>
        </footer>
    )
}