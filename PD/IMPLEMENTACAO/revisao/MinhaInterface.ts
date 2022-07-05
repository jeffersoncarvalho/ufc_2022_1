interface IPessoa {
    //propriedades / properties
    nome: string
    sobrenome: string
    cpf: string
    idade: number

    //métodos / methods
    getNome: ()=>string
    getNomeCompleto: ()=>string
    getCPF(): string
    getIdade(): number

}

class Estudante implements IPessoa{

    nome: string
    sobrenome: string
    cpf: string
    idade: number

    ira: number

    constructor(nome:string,sobrenome:string,cpf:string,idade:number, ira:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.idade = idade
        this.ira = ira
    }

    getNome = ():string =>{
        return this.nome
    }

    getNomeCompleto = ():string =>{
        return this.nome + " " + this.sobrenome
    }

    getCPF(): string {
        return this.cpf
    }

    getIdade(): number {
        return this.idade
    }

    getIra(): number {
        return this.ira
    }

    getSituacao(): string {
        if(this.ira>=7) return 'APROVADO CONCEITO A'
        if(this.ira<4) return 'REPROVADO'
        return 'APROVADO CONCEITO B'
    }
}

let e1:Estudante = new Estudante('Jefferson','de Carvalho','111111111',27, 5.7)
console.log(e1.getNomeCompleto())
console.log(e1.getSituacao())


interface IEmpregado extends IPessoa{
    salario: number
    getSalario():number
}

class Professor implements IEmpregado {
    
}