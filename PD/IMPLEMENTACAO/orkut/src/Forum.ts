import { Comunidade } from "./Comunidade"
import { Mensagem } from "./Mensagem"

class Forum {
    id:number
    titulo:string

    mensagens: Mensagem[]
    comunidade: Comunidade

    constructor(id:number,titulo:string,comunidade:Comunidade){
        this.id = id
        this.titulo = titulo
        this.mensagens = []
        this.comunidade = comunidade
    }

    addMensagem(mensagem:Mensagem){
        let fazParte:boolean = false
        for(let usuario of this.comunidade.usuarios){
            if(usuario.id === mensagem.usuario.id){
                fazParte = true
                break
            } 
        }

        if(fazParte) this.mensagens.push(mensagem)
        else console.log(mensagem.usuario.nome + " não faz parte da comunidade " + this.comunidade.nome)
    }
}

export {Forum}