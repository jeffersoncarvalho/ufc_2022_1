enum DiasSemana {
    Domingo = 1,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

enum Direcoes {
    NORTE = "NORTE",
    SUL = "SUL",
    LESTE = "LESTE",
    OESTE = "OESTE"
}

function diaUtil(dia:DiasSemana):boolean{

    if(dia >= DiasSemana.Segunda && dia <= DiasSemana.Sexta)
        return true
    return false
}

console.log(diaUtil(DiasSemana.Terca))
console.log(diaUtil(3))