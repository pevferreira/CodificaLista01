// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.


const prompt = require('prompt-sync')()

let valor = parseFloat(prompt('Digite o valor para imprimir a respectiva tabuada (1-10)'))

for (i = 1; i < 11; i++) {
    console.log(valor + ' X ' + i + ' =', i * valor)
}