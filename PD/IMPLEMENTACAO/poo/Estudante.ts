class Estudante {
    //variáveis de instância (do objeto)
    matricula:string
    nome:string
    sobrenome:string
    curso:string
    ira:number
    disciplinas: Disciplina[]

    //só é chamado no new
    constructor(matricula:string,nome:string,ira:number){
       this.matricula = matricula
       this.nome = nome
       this.ira = ira
    }

    setDisciplinas(disciplinas:Disciplina[]){
        this.disciplinas = disciplinas
    }

    setCurso(curso:string){
        this.curso = curso
    }

    calcularMediaGeral():number{
        let media = 0
        for(let i=0;i<this.disciplinas.length;i++){
            media = media + this.disciplinas[i].nota
        }
        return media/this.disciplinas.length
    }

}

class Disciplina {
    nome:string
    nota:number

    constructor(nome:string,nota:number){
        this.nome = nome
        this.nota = nota
    }
}

let d1:Disciplina = new Disciplina('FUP',7.5)
let d2:Disciplina = new Disciplina('WEB',8.4)
let d3:Disciplina = new Disciplina('POO',5.5)

let e1:Estudante = new Estudante('0001234','Jefferson',6.9)
//console.log(e1.disciplinas)
e1.setCurso('Design Digital')
e1.setDisciplinas([d1,d2,d3])
console.log(e1.nome)
console.log(e1.disciplinas)
console.log(e1.curso)
console.log(e1.calcularMediaGeral())