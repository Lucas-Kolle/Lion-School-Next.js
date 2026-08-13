import Image from "next/image" 


//Criando um componete chamado Header. Um componente é uma função que retorna um elemento HTML.
export default function Header() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
                                        O default significa que este é o componente principal desse arquivo. */
    return (
        <header className="h-[12vh] bg-[#3347B0] flex justify-between px-6 items-center">
            <div className="flex">
                <Image 
                    src="/logo-image.svg"
                    alt="Logo do site"
                    width={500}
                    height={500}
                    className="h-[10vh] w-auto"
                />
            </div>
            <div className="flex">
                <h1 className="text-[6vh]">Sair</h1>
            </div>
        </header>
    )
}