let vetorNumeros:number[] = [20,45,10,34,60,100,34]
let media:number
let soma:number = 0

for(let i=0;i<vetorNumeros.length;i++){
    soma = soma + vetorNumeros[i]
}
media = soma/vetorNumeros.length
console.log(media)

for(let i=0;i<vetorNumeros.length;i++){
    if(vetorNumeros[i]>=media){
        console.log(vetorNumeros[i])
    }
}