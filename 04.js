const prompt = require('prompt-sync')()

let operador = prompt('Digite o operador: + - / * ')
let num1 = parseFloat(prompt('Digite o primeiro numero'))
let num2 = parseFloat(prompt('Digite o segundo numero'))

let resultado

switch (operador) {
    case '+':
        resultado = num1 + num2
        break
    case '-':
        resultado = num1 - num2
        break
    case '/':
        resultado = num1 / num2
        break
    case '*':
        if (num2 !== 0) {
            resultado = num1 * num2
        } else {
            console.log('Divisão por zero')
        }
        break
}   console.log('RESULTADO: ', { resultado })