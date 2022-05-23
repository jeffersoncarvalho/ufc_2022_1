enum Titulacao {
    Doutor = "DOUTOR",
    Mestre = "MESTRE",
    Graduado = "GRADUADO"
}

interface IProfessor {
    nome: string
    titulacao: Titulacao
    departamento: string
    salario: number
}

let professorDr: IProfessor = {
    nome: "Wladimir",
    titulacao: Titulacao.Doutor,
    departamento: "Computação",
    salario: 6000
}
let professorMestre: IProfessor = {
    nome: "João",
    titulacao: Titulacao.Mestre,
    departamento: "Computação",
    salario: 5000
}
let professorGraduado: IProfessor = {
    nome: "Bruno",
    titulacao: Titulacao.Graduado,
    departamento: "Computação",
    salario: 4000
}

console.log(professorDr)
console.log(professorMestre)
console.log(professorGraduado)

export {Titulacao,IProfessor}