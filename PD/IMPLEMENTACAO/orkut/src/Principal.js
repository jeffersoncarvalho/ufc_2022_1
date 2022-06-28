"use strict";
exports.__esModule = true;
var RedeSocial_1 = require("./RedeSocial");
var Comunidade_1 = require("./Comunidade");
var Usuario_1 = require("./Usuario");
var Forum_1 = require("./Forum");
var Mensagem_1 = require("./Mensagem");
var rs = new RedeSocial_1.RedeSocial(0, 'Facebook', 'Blah blah');
var user1 = new Usuario_1.Usuario(0, 'Jefferson', 'jeff@ufc.br');
var user2 = new Usuario_1.Usuario(1, 'Thomas', 'thomas@ufc.br');
var user3 = new Usuario_1.Usuario(2, 'Maria', 'maria@ufc.br');
var com1 = new Comunidade_1.Comunidade(0, 'Música dos anos 80', 'http://imagem.png');
var com2 = new Comunidade_1.Comunidade(1, 'Filmes de ação', 'http://acao.png');
rs.addComunidade(com1);
rs.addComunidade(com2);
user1.addComunidade(com1);
user2.addComunidade(com1);
user2.addComunidade(com2);
user3.addComunidade(com2);
var forum = new Forum_1.Forum(0, 'Review dos filmes dos anos 80', com2);
var m1 = new Mensagem_1.Mensagem(0, 'Gostei muito dos Caça-Fantasmas', user1);
var m2 = new Mensagem_1.Mensagem(1, 'Já eu prefiro o Loucademia de Polícia!', user2);
forum.addMensagem(m1);
forum.addMensagem(m2);
com2.addForum(forum);
console.log("REDE SOCIAL: " + rs.nome);
for (var _i = 0, _a = rs.comunidades; _i < _a.length; _i++) {
    var comunidade = _a[_i];
    console.log("\tCOMUNIDADE: " + comunidade.nome);
    for (var _b = 0, _c = comunidade.usuarios; _b < _c.length; _b++) {
        var usuario = _c[_b];
        console.log("\t\tUSUÁRIO: " + usuario.nome);
    }
    for (var _d = 0, _e = comunidade.foruns; _d < _e.length; _d++) {
        var forum_1 = _e[_d];
        console.log("\t\tFORUM: " + forum_1.titulo);
        for (var _f = 0, _g = forum_1.mensagens; _f < _g.length; _f++) {
            var mensagem = _g[_f];
            console.log("\t\t\tMENSAGEM: " + mensagem.texto + " - " + mensagem.usuario.nome);
        }
    }
}
//user1.addAmigo(user2)
//user2.addAmigo(user1)
//user3.addAmigo(user3)
