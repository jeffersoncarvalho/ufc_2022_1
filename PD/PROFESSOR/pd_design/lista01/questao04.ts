function questao04(base:number,potencia:number):number{
    let res = 1
    for(let i=0;i<potencia;i++)
        res = res * base
    return res
}

console.log(questao04(2,5))