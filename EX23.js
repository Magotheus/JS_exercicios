// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto



function desconto(sexo, compras){
    if(sexo == "feminino"){
    console.log(`desconto de 13% aplicado para o sexo ${sexo}, suas compras de ${(compras).toFixed(2)} reais ficam a ${(compras - (compras * 13) / 100).toFixed(2)} reais`)
    }else{
        console.log(`desconto de 5% aplicado para o sexo ${sexo}, suas compras de ${(compras).toFixed(2)} reais ficam a ${(compras - (compras * 5) / 100).toFixed(2)} reais`)
    }
}

desconto("feminino", 100.50)
desconto("masculino", 100.50)