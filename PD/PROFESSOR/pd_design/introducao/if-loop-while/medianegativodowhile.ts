let arrayInteiros2 = [-2,5,19,12,-4,6,9]
let soma2:number = 0
let j:number = 0

do{
    if(arrayInteiros2[j]>=0) {
        soma2  = soma2 + arrayInteiros2[j]
        j++
    }
}while(arrayInteiros2[j]>=0)

if(j>0)
    var media2 = soma2/j

console.log('Média: ' + media2)
console.log("Média: " + media2)
console.log(`Média: ${media2}`)