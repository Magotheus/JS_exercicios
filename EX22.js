// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento

function alistamento(anoNascimento){
    if(2022 - anoNascimento > 18){
        console.log(`${2022 - anoNascimento} anos, ja se passaram ${2022 - anoNascimento - 18} ano(s) do seu alistamento `)
    }else{
        console.log(`${2022 - anoNascimento} anos, ainda faltam ${18 - (2022 - anoNascimento)} ano(s) para seu alistamento `)
    }
}

alistamento(1998)