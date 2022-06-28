import {Comunidade} from './Comunidade'
import {Foto} from './Foto'

class Usuario {
    id:number
    nome:string
    email:string

    comunidades: Comunidade[]
    amizades: Usuario[]
    fotos: Foto[]

    constructor(id:number,nome:string,email:string){
        this.id = id
        this.nome = nome
        this.email = email

        this.comunidades = []
        this.amizades = []
        this.fotos = []
    }

    addComunidade(comunidade:Comunidade){
        this.comunidades.push(comunidade)
        comunidade.addUsuario(this)
    }

    ehForeverAlone(usuario:Usuario):boolean{
        if(this.id === usuario.id) return true
        return false
    }

    ehMeuAmigo(usuario:Usuario):boolean{
        for(let amigo of this.amizades){
            if(usuario.id === amigo.id) return true
        }
        return false
    }

    addAmigo(usuario:Usuario){

        //testar se eu não estou tentando ser amigo de mim mesmo!
        if(this.ehForeverAlone(usuario)){
            console.log('Forever alone')
            return
        }

        //testar se já tenho amizade com usuário!
        if(this.ehMeuAmigo(usuario)===true){
            console.log('Já é meu amigo!')
            return
        }

        this.amizades.push(usuario) //meu amigo
        usuario.amizades.push(this)
    }

    addFoto(foto:Foto){
        this.fotos.push(foto)
    }
}

export { Usuario }