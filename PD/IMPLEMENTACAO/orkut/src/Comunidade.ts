import {Usuario} from './Usuario'
import {Categoria} from './Categoria'
import {Forum} from './Forum'

class Comunidade {
    id:number
    nome:string
    imagem:string
    usuarios: Usuario[]
    categoria: Categoria
    foruns: Forum[]

    constructor(id:number,nome:string,imagem:string){
        this.id = id
        this.nome = nome
        this.imagem = imagem
        this.usuarios = []
        this.foruns = []
    }

    addUsuario(usuario:Usuario){
        this.usuarios.push(usuario)
    }

    addForum(forum:Forum){
        this.foruns.push(forum)
    }

    setCategoria(categoria:Categoria){
        this.categoria = categoria
    }

}

export { Comunidade }