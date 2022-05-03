const media = (vetor:number[]):number => {
    let soma:number = 0
    for(let i=0; i<vetor.length; i++){
        soma = soma + vetor[i]
    }
    return soma/vetor.length
}

function questao09(vetor1:number[],vetor2:number[]):number[]{
    let minhaMedia:number = media(vetor1)
    let res:number[] = []
    for(let i=0; i<vetor2.length; i++){
        if(vetor2[i]>minhaMedia){
            //console.log(vetor2[i])
            res.push(vetor2[i])
        }
    }
    return res
}

console.log(questao09([2,4,6],[-8,1,0,3,6,8,2,10]))