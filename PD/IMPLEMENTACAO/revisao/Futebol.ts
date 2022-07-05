enum Esporte {
    FUTEBOL = 'FUTEBOL',
    VOLEIBOL = 'VOLEIBOL',
    BASQUETE = 'BASQUETE',
    NATACAO = 'NATACAO'
}

interface IEsportista{

    nome: string
    matricula: string
    esporte: Esporte
    idade: number

    getEsporte():Esporte
    getIdade():number

}

class Atleta implements IEsportista {

    nome: string
    matricula: string
    esporte: Esporte
    idade: number

    rendimento: number

    constructor(nome:string,matricula:string,esporte:Esporte,rendimento:number){
        this.nome = nome
        this.matricula = matricula
        this.esporte = esporte
        this.rendimento = rendimento
    }

    getEsporte():Esporte {
        return this.esporte
    }
    getIdade():number {
        return this.idade
    }

    isClassificadoOlimpiada():boolean{
        if(this.rendimento<8) return false
        return true
    }
}

let a1:Atleta = new Atleta('Xuxa','2222222',Esporte.NATACAO,10)