// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let quantidade = parseFloat(prompt('Digite a quantidade de maçãs'))
let preco = 0
let totalPreco = 0
if (quantidade < 6) {
    preco = 0.30
} else if (quantidade >= 12) {
    preco = 0.25
} else {
    console.log('digite um valor menor que 6 ou maior ou igual a 12')
}
totalPreco = (quantidade * preco)
console.log('O total da compra é igual a: R$ ' + totalPreco.toFixed(2))