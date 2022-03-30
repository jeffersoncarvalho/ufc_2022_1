var np1:number = 7.3
var np2:number = 5.6
var mediaParcial:number = (np1 + np2)/2
mediaParcial = parseFloat(mediaParcial.toFixed(2))
console.log(mediaParcial)  

if (mediaParcial >= 7) console.log('Aprovado Conceito A')
else if (mediaParcial < 4) console.log('Reprovado Direto')
else {
    var af:number = 8
    if (af < 4) console.log('Reprovado na Final')
    else {
        var mediaFinal:number = (mediaParcial + af)/2
        mediaFinal = parseFloat(mediaFinal.toFixed(2))
        console.log(mediaFinal)
        if (mediaFinal < 5) console.log('Reprovado na Média Final')
        else console.log('Aprovado Conceito B')
    }
} 