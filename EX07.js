// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
// sua terça parte.
// Ex: 
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

let numero = 3.5;
const DOBRO = numero * 2;
const TERCO = numero / 3;

console.log(`O dobro de ${numero} é ${DOBRO}
A terça parte de ${numero} é ${TERCO.toFixed(5)}`);
