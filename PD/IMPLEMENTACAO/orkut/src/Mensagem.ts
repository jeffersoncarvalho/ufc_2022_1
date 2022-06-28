import { Usuario } from "./Usuario"

class Mensagem {
    id:number
    texto:string
    usuario:Usuario

    constructor(id:number,texto:string,usuario:Usuario){
        this.id = id
        this.texto = texto
        this.usuario = usuario
    }
}

export {Mensagem}