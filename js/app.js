import { calcularSoma } from "./calculos.js"

const calcular = document.getElementById("calcular")

const numeros = [1,2,3,4,5,6,7,8]

calcular.addEventListener("click", () => calcularSoma(numeros))