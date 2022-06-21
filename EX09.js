// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let carteira = 1000.00;
let dolar = 3.45;
const COTACAO = carteira / dolar;

console.log(`Com os R$${carteira.toFixed(2)} reais que tem na carteira, você pode comprar US$${COTACAO.toFixed(2)} dolares`);