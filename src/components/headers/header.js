import Image from "next/image" 


//Criando um componete chamado Header. Um componente é uma função que retorna um elemento HTML.
export default function Header() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
                                        O default significa que este é o componente principal desse arquivo. */
    return (
        <header className=" h-[15vh] bg-[#3347B0]">
            <div>
                <Image 
                    src="/"
                    alt="Logo do site"
                    width={300}
                    height={100}
                />
            </div>
        </header>
    )
}