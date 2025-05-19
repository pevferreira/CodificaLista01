const prompt = require('prompt-sync')()

let nota = prompt('Digite a nota do aluno entre 0 e 10')


if (nota < 0) {
    console.log('Nota não pode ser negativa')
} else if (nota >= 7) {
    console.log('APROVADO')
} else if ((nota < 7) && (nota >= 5)) {
    console.log('RECUPERACAO')
} else {
    console.log('REPROVADO')
}