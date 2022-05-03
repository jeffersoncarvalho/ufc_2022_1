
const questao08 = (indecisos:(boolean|number|string)[]):string[] => {
    let resultado = []
    for(let i=0;i<indecisos.length;i++){
        console.log(typeof(indecisos[i]))
        resultado.push(typeof(indecisos[i]))
    }
    return resultado
}
let res = questao08([7,false,true,5.6,"oi",'oi',true])
console.log(res[2])