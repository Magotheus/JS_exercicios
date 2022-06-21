// Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
// por hora trabalhada.

let diasTrabalhados = 30;
let horasTrabalhadas = 8 * 25;
let salario = diasTrabalhados * horasTrabalhadas;

console.log(`Em ${diasTrabalhados} dias recebendo R$${horasTrabalhadas.toFixed(2)} reais por 8 horas diarias, seu salario vai ser de R$${salario.toFixed(2)} reais`)