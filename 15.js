// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0;
let b = 1;
let fibo;

console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
    fibo = a + b;
    console.log(fibo);
    a = b;
    b = fibo;
}
