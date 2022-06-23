// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
// dela e depois mostre se ela pode ou não votar.

function eleicao(idade){
    if(idade >= 16){
        console.log(`Com ${idade} anos você já pode votar`)
    }else{
        console.log(`Com ${idade} anos você ainda não pode votar`)
    }
}

eleicao(15)