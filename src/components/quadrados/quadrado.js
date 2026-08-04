//Criando um componente chamado Quadrado. Um componente é uma função que retorna um elemento HTML.
export default function Quadrado() { /* O export serve para permitir que esse componente seja usado em outros arquivos. 
                                        O default significa que este é o componente principal desse arquivo. */
  return (
    <div className="w-32 h-32 bg-blue-500">
        <span className="text-white text-center">Componente Quadrado!</span>
    </div>
  );
}