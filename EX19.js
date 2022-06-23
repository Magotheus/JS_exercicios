// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0).
let nome = "Matheus";
let prova1 = 5;
let prova2 = 5;
let media = (prova1 + prova2) / 2;

function validadora(media){
    if(media >= 7.0){
        console.log(`com media ${media} você foi aprovado`)
    }else{
        console.log(`com media ${media} você foi reprovado`)
    }
}

validadora(media)