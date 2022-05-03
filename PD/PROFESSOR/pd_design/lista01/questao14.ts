const ehPrimo = (x:number):boolean => {

    for(let i=2;i<=x/2;i++){
        if(x%i==0) return false
    }
    return true
}

function questao14(N:number){
    for(let i=2;i<=N;i++){
        if (ehPrimo(i)) console.log(i)
    }
}

questao14(30)