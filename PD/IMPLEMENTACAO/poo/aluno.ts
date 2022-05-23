interface IMeuAluno {
    nome:string
    ira:number
    cpf?:string
}

interface IPessoa {
    nome:string
    nascimento:string
}

interface IEmpregado extends IPessoa {
    salario:number
    departamento:string
}

interface IProfessor extends IPessoa{
    titulacao:string
}

let pessoa:IPessoa = {nome:"Fulano",nascimento:"04/05/2000"}
let empregado:IEmpregado = {nome:"Sicrano",
                            nascimento:"05/06/99", 
                            salario:2345.98, 
                            departamento:"vendas"}
let professor:IProfessor = {nome:"Jefferson",nascimento:"09/09/2005",titulacao:"Mestrado"}