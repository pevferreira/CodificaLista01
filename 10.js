// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let valor = parseFloat(prompt('Digite o valor a ser impresso 10 vezes'))

for (i = 0; i < 10; i++) {
    console.log(valor)
}