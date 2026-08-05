//Criando um componete chamado footer. Um componente é uma função que retorna um elemento HTML.
export default function Footer() { /* O export serve para permitir que esse componente seja usado em outros arquivos.
    O default significa que este é o componente principal desse arquivo. */
return (
    <footer className="bg-gray-800 text-white p-4">
        <text>Copyright © 2026 | Fernando Leonid</text>
    </footer>
)
}