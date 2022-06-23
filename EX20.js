// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR

// let numero = 10;
// let calc = numero % 2

function parImpar (numero){
    if(numero % 2 == 0){
        console.log(`${numero} é par`)
    }else{
        console.log(`${numero} é impar`)
    }
}

parImpar(1)