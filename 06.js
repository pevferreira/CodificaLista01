const prompt = require('prompt-sync')()

let lado1 = parseFloat(prompt('Digite o tamanho do primeiro lado'))
let lado2 = parseFloat(prompt('Digite o tamanho do segundo lado'))
let lado3 = parseFloat(prompt('Digite o tamanho do terceiro lado'))

if ((lado1 === lado2) && (lado2 === lado3)) {
    console.log('equilatero')
} else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
    console.log('isoceles')
} else {
    console.log('escaleno')
}