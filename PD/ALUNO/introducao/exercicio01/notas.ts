var np1:number = 7.8
var np2:number = 5.1
var mediaParcial = (np1+np2)/2
console.log("Média Parcial: " + mediaParcial)

if(mediaParcial >= 7) console.log("Aprovado Conceito A")
else if (mediaParcial < 4) console.log("Reprovado na Média Parcial")
else {
    var af:number = 7.9
    if(af < 4) console.log("Reprovado na AF")
    else {
        var mediaFinal:number
        mediaFinal = (mediaParcial + af)/2
        if (mediaFinal < 5) console.log("Reprovado na Média Final")
        else console.log("Aprovado Conceito B")
    }
}