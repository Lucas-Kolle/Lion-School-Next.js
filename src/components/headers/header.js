//Criando um componete chamado Header. Um componente é uma função que retorna um elemento HTML.
export default function Header() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
                                        O default significa que este é o componente principal desse arquivo. */
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold">Testando Header</h1>
        </header>
    )
}