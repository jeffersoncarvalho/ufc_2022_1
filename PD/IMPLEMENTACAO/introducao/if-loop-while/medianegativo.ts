let arrayInteiros = [2,5,19,12,-4,6,9]
let soma:number = 0
let i:number = 0

while(arrayInteiros[i]>=0){
    soma = soma + arrayInteiros[i]
    i = i + 1    
}

let media = soma/i
console.log('Média: ' + media)
console.log("Média: " + media)
console.log(`Média: ${media}`)
