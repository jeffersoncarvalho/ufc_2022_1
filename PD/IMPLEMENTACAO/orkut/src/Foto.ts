import { Comentario } from "./Comentario"

class Foto {

    id:number
    imagem:string

    comentarios:Comentario[]

    constructor(id:number,imagem:string){
        this.imagem = imagem
        this.id = id
        this.comentarios = []
    }

    addComentario(comentario:Comentario){
        this.comentarios.push(comentario)
    }
}

export {Foto}