const prompt = require('prompt-sync')()

let numero = prompt('Digite o número a ser verificado')
if (numero % 2 == 0) {
    console.log('numero par')
} else {
    console.log('numero impar')
}