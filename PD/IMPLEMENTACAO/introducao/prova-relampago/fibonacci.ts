let a: number = 0
let b: number = 1
let c: number
let x: number = 100

/*for(let i=0; ;i++){
    c = a + b
    if(c==x){
        console.log("Sim, faz parte na posição: " + i)
        break
    }else if(c>x){
        console.log("Não faz parte da série. O c é igual a " + c + " na posição " + i)
        break
    }
    //console.log(c)
    a = b
    b = c
}*/

do {
    c = a + b
    if (c == x) {
        console.log("Sim, faz parte")
    } else if (c > x) {
        console.log("Não faz parte.")
    } else {
        a = b
        b = c
    }
} while (c < x)