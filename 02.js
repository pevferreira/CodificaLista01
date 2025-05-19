const prompt = require('prompt-sync')()

let idade = prompt('Digite a idade ')

if (idade < 0) {
    console.log('Idade nao pode ser menor que zero')
} else if (idade < 12) {
    console.log('Crianca')
} else if (idade < 18) {
    console.log('Adolescente')
} else if (idade < 60) {
    console.log('Adulto')
} else {
    console.log('Idoso')
}
