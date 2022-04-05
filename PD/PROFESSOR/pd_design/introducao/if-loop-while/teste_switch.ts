var x:number = 10
var flag:boolean = false

var valor:string = (x >= 0)? "POSITIVO" : "NEGATIVO"
console.log(valor)

if ( x >= 0) {
    valor = "POSITIVO"
}else {
    valor = "NEGATIVO"
}

if(x == 0) {
    console.log("O valor é 0")
}
if (x == 1) {
    console.log("O valor é 1")
}
if (x == 2) {
    console.log("O valor é 2")
}
if (x == 3) {
    console.log("O valor é 3")
}

if (x < 0 || x > 3){
    console.log("Valor inválido!")
}

/*if(x == 0) {
    console.log("O valor é 0")
}else if (x == 1) {
    console.log("O valor é 1")
}else if (x == 2) {
    console.log("O valor é 2")
}else if (x == 3) {
    console.log("O valor é 3")
}else {
    console.log("Valor inválido!")
}*/

/*switch(x) {
    case 0:
        console.log("O valor é 0")
        break
    case 1: 
        console.log("O valor é 1")
        break
    case 2:
        console.log("O valor é 2")
        break
    case 3:
        console.log("O valor é 3")
        break
    default:
        console.log("Valor inválido!")
        break
}*/