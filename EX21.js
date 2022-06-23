// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO.

function bissexto(ano){
    if(ano % 4 == 0 || ano % 100 == 0 || ano % 400 == 0){
        console.log(`o ano de ${ano} é bissexto`)
    }else{
        console.log(`o ano de ${ano} não é bissexto`)
    }
}

bissexto(2021)