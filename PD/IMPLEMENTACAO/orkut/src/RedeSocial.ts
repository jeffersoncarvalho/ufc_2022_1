import {Comunidade} from './Comunidade'

class RedeSocial {
    id:number
    nome:string
    descricao:string
    comunidades: Comunidade[]

    constructor(id:number,nome:string,descricao:string){
        this.id = id
        this.nome = nome
        this.descricao =descricao
        this.comunidades = []
    }

    addComunidade(comunidade:Comunidade){
        this.comunidades.push(comunidade)
    }
}

export {RedeSocial}
