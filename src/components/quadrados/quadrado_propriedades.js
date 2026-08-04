//Criando um componente quadrado com os atributos editaveis, como cor, tamanho e texto. Um componente é uma função que retorna um elemento HTML.
export default function QuadradoPropiedades({texto, cor, tamanho}){ // Os atributos são passados como propriedades para o componente, permitindo que ele seja personalizado.
  return (
    <div className={`w-${tamanho} h-${tamanho} bg-${cor}-500`}> {/* Usando os atributos como propriedades, permitindo que sejam alteradas conforme necessário */}
        <span className="text-white text-center">{texto}</span>
    </div>
  )
}