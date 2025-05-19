const prompt = require('prompt-sync')()

let peso = parseFloat(prompt('Digite o peso (em kilos)'))
let altura = parseFloat(prompt('Digite a altura (em metros)'))
let imc = (peso / altura ^ 2)

if ((peso < 0) || (altura < 0)) {
    console.log('Valores não podem ser negativos')
} else if (imc < 18.5) {
    console.log('MAGREZA')
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    console.log('NORMAL')
} else if ((imc >= 25) && (imc <= 29.9)) {
    console.log('SOBREPESO')
} else if (imc >= 40)
    console.log('OBESIDADE')
