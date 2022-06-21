// Crie um programa que leia o preço de um produto, calcule e mostre o seu 
// PREÇO PROMOCIONAL, com 5% de desconto.

let preco = 100.00;
let desc = 50;
let precoFinal = preco - (preco * desc) / 100;

console.log(`O produto que custa R$${preco.toFixed(2)} tem uma promo de ${desc}% e seu preço final é R$${precoFinal.toFixed(2)} `)

