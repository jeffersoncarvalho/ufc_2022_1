function mediainteirosclassica(vetorInteiros):number{

    let soma = 0
    for(let i=0;i<vetorInteiros.length;i++){
        soma  = soma + vetorInteiros[i]
    }
    return soma/vetorInteiros.length
}

let alunoAprovadoOuNao = (nota1:number,nota2:number):boolean => {
    if ((nota1+nota2)/2 >= 7) return true
    else return false
}

console.log(mediainteirosclassica([2,6,7,9,10,12]).toFixed(2))
console.log(alunoAprovadoOuNao(7,4))