// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
// seu novo salário, com 15% de aumento.

let salario = 1000.00;
let aumento = 15;
const CALC = salario + (salario * aumento) / 100;

console.log(`Seu salario antes de R$${salario.toFixed(2)} reais passa a ser R$${CALC.toFixed(2)} depois de um aumento de ${aumento}%`);