// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente

const prompt = require('prompt-sync')()

console.log('Digite dois valores diferentes')
let valor1 = parseFloat(prompt('Digite o primeiro valor'))
let valor2 = parseFloat(prompt('Digite o segundo valor'))
let maior = 0
let menor = 0

if (valor1 > valor2) {
    maior = valor1
    menor = valor2
} else if (valor2 > valor1) {
    maior = valor2
    menor = valor1
} else {
    console.log('Os valores são iguais')
}
console.log(menor, maior)