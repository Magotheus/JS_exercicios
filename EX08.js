// Desenvolva um programa que leia uma distância em metros e mostre os valores 
// relativos em outras medidas.
// Ex: 
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

let metros = 185.72;
const KM = metros / 1000.000;
const HM = metros / 100;
const DAM = metros / 10;
const DM = metros * 10;
const CM = metros * 100;
const MM = metros * 1000;

console.log(`A distancia de ${metros}m corresponde a :
${KM}km
${HM}hm
${DAM}dam
${DM}dm
${CM.toFixed(1)}cm
${MM.toFixed(1)}mm`);