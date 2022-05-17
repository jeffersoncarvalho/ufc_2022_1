import { Titulacao, IProfessor } from "./Questao01"

const mediaSalarioDoutores = (professores:IProfessor[]):number => {

    let media = 0
    let qtd = 0
    for(let i=0;i<professores.length;i++){
        if(professores[i].titulacao == Titulacao.Doutor){
            media = media + professores[i].salario
            qtd = qtd + 1
        }
    }
    return media/qtd

}

const professores:IProfessor[] = [
    {
        nome: "Wladimir",
        titulacao: Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Titulacao.Mestre,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    }
]

console.log("A média é: " + mediaSalarioDoutores(professores))