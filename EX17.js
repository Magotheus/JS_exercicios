// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

function multaVelocidade(velocidade){
    if(velocidade <= 80){
        console.log(`${velocidade}km está dentro do permitido`)
    }else{
        console.log(`Velocidade permitida é de 80km, você passou a ${velocidade}km e foi multado em R$${((velocidade-80)*5).toFixed(2)} (5R$ por km ultrapassado)`)
    }
}

multaVelocidade(105)