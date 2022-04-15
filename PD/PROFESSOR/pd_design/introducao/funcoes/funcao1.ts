function mediaDeNumeros(numeros: number[]):number{
    let soma = 0
    for (let i=0;i<numeros.length;i++){
        soma += numeros[i]
    }

    return soma/numeros.length
}

console.log(mediaDeNumeros([2,3,4,5,6,7,8,9]))

 


enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

console.log(Status.Pending)
 

