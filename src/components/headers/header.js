//Criando um componete chamado Header. Um componente é uma função que retorna um elemento HTML.
export default function Header() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
                                        O default significa que este é o componente principal desse arquivo. */
    return (
        <header className=" h-[10vh] bg-[#3347B0]">
            <h1>Testando Header</h1>
        </header>
    )
}