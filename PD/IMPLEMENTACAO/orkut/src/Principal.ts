import { RedeSocial } from "./RedeSocial";
import { Comunidade } from "./Comunidade";
import { Usuario } from "./Usuario";
import { Forum } from "./Forum";
import { Mensagem } from "./Mensagem";

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

let forum:Forum = new Forum(0,'Review dos filmes dos anos 80',com2)
let m1:Mensagem = new Mensagem(0,'Gostei muito dos Caça-Fantasmas',user1)
let m2:Mensagem = new Mensagem(1,'Já eu prefiro o Loucademia de Polícia!',user2)
forum.addMensagem(m1)
forum.addMensagem(m2)

com2.addForum(forum)

console.log("REDE SOCIAL: " + rs.nome)
for(let comunidade of rs.comunidades){
    console.log("\tCOMUNIDADE: " + comunidade.nome)
    for(let usuario of comunidade.usuarios){
        console.log("\t\tUSUÁRIO: " + usuario.nome)
        
    }
    for(let forum of comunidade.foruns){
        console.log("\t\tFORUM: " + forum.titulo)
        for(let mensagem of forum.mensagens){
            console.log("\t\t\tMENSAGEM: " + mensagem.texto + " - " + mensagem.usuario.nome)
        }
    }
}

//user1.addAmigo(user2)
//user2.addAmigo(user1)
//user3.addAmigo(user3)