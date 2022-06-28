import {Usuario} from './Usuario'

class Comunidade {
    id:number
    nome:string
    imagem:string
    usuarios: Usuario[]

    constructor(id:number,nome:string,imagem:string){
        this.id = id
        this.nome = nome
        this.imagem = imagem
        this.usuarios = []
    }

    addUsuario(usuario:Usuario){
        this.usuarios.push(usuario)
    }

}

export { Comunidade }