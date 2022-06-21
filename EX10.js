// Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
let base = 10;
let altura = 10;
const AREA = base * altura;
const AREAtinta = AREA / 2;

console.log(`Para esta parede temos ${AREA}m2 e sera necessário ${AREAtinta} litros para pintar toda a parede.`)