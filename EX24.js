// Faça um algoritmo que pergunte a distância que um passageiro deseja 
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
// viagens até 200Km e R$0.45 para viagens mais longas.

function distancia(km) {
    if(km <= 200){
        console.log(`Distancia de ${km}km inferior a 200km, valor por km sai a R$ 0.50, valor total ${(km * 0.50).toFixed(2)} reais`)
    } else{
        console.log(`Distancia de ${km}km superior a 200km, valor por km sai a R$ 0.45, valor total ${(km * 0.45).toFixed(2)} reais`)
    }
}

distancia(240)