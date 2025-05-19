// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

const prompt = require('prompt-sync')()
let numero
let soma = 0
let contador = 0
let media = 0

do {
    numero = parseFloat(prompt('Digite um numero decimal. Digite "0" para encerrar '))
    soma = soma + numero

    if (numero !== 0) {
        contador++
    }

} while (numero != 0)

if (contador > 0) {
    media = soma / contador
}

console.log(soma)
console.log(media.toFixed(2))
