import { RedeSocial } from "./RedeSocial";
import { Comunidade } from "./Comunidade";
import { Usuario } from "./Usuario";

let rs:RedeSocial = new RedeSocial(0,'Facebook','Blah blah')

let user1:Usuario = new Usuario(0,'Jefferson','jeff@ufc.br')
let user2:Usuario = new Usuario(1,'Thomas','thomas@ufc.br')
let user3:Usuario = new Usuario(2,'Maria','maria@ufc.br')

let com1:Comunidade = new Comunidade(0,'Música dos anos 80','http://imagem.png')
let com2:Comunidade = new Comunidade(1,'Filmes de ação','http://acao.png')

rs.addComunidade(com1)
rs.addComunidade(com2)

user1.addComunidade(com1)
user2.addComunidade(com1)

user2.addComunidade(com2)
user3.addComunidade(com2)

for(let comunidade of rs.comunidades){
    console.log(comunidade.nome)
    for(let usuario of comunidade.usuarios){
        console.log(usuario.nome)
        
    }
}

user1.addAmigo(user2)
//user2.addAmigo(user1)
user3.addAmigo(user3)