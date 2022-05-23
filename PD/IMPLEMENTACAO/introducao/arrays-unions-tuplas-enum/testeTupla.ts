let empregados: [number,string,number][]
empregados = [
    [1,"Bob",4],
    [2,"Jeff",3.5],
    [3,"Maria",4.5]    
]

let empregadosSobrenome: [number,string][]
empregadosSobrenome = [
    [1," Morton"],
    [2," Oak"],
    [3," Luiza"]    
]

for(let i=0;i<empregados.length;i++){
    empregados[i][1] = 
    empregados[i][1] + empregadosSobrenome[i][1]
    //console.log(empregados[i][1] + empregadosSobrenome[i][1])
}
for(let i=0;i<empregados.length;i++)
    console.log(empregados[i])


/*let soma = 0
for(let i=0;i<empregados.length;i++){
    soma = soma + empregados[i][2]
    //console.log(empregados[i][2])
}
let media = soma/empregados.length
console.log(media)*/