enum Esporte {
    FUTEBOL = 'FUTEBOL',
    VOLEIBOL = 'VOLEIBOL',
    BASQUETE = 'BASQUETE'
}

interface IEsportista{

    nome: string
    matricula: string
    esporte: string
    idade: number

    getEsporte():string
    getIdade():number

}

class Atleta implements IEsportista {

    nome: string
    matricula: string
    esporte: string
    idade: number

    rendimento: number

    constructor(nome:string,matricula:string,esporte:string,rendimento:number){
        this.nome = nome
        this.matricula = matricula
        this.esporte = esporte
        this.rendimento = rendimento
    }

    getEsporte():string {
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