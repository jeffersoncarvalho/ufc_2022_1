const potencia = (base:number,expoente:number):number => {
    let res:number = 1
    for(let i=0; i<expoente; i++){
        res = res * base
    }
    return res
}

function questao10(vetor:number[]){
    for(let i=0; i<vetor.length; i++){
        console.log(potencia(vetor[i],3))
    }
}

questao10([2,4,3,5,1,7])