// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado
let dias = 2;
let km = 2;
let cobrancaDia = dias * 90;
let cobrancaKM = km * 0.20;
let precoTotal = cobrancaDia + cobrancaKM;

console.log(`o dia custa R$ 90,00 e o Km R$ 0.20
Alugando o carro por ${dias} dias e rodando ${km}Km
temos R$${cobrancaDia.toFixed(2)} em dias e R$${cobrancaKM.toFixed(2)}
Valor total a ser pago R$${precoTotal.toFixed(2)}`)