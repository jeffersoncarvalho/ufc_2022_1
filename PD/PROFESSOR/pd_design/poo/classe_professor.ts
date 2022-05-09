interface IMeuProfessor {
    codigo: string
    titulacao: string

    getSalario():number
}

class ProfessorUFC implements IMeuProfessor{
    codigo:string
    titulacao: string

    constructor(codigo:string,titulacao:string){
        this.codigo = codigo
        this.titulacao = titulacao
    }

    getSalario(): number {
        if(this.titulacao=="Doutor") return 10000
        else if (this.titulacao="Mestre") return 6000
        else return 4000
    }
}

let prof1:ProfessorUFC = new ProfessorUFC("1111","Mestre")
console.log(prof1.getSalario())