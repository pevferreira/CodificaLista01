// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for

const prompt = require('prompt-sync')()
let soma = 0

for (i = 0; i < 5; i++) {
    let numero = parseFloat(prompt('Digite o numero'))
    soma = soma + numero
}
console.log(soma)
