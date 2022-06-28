"use strict";
exports.__esModule = true;
var RedeSocial_1 = require("./RedeSocial");
var Comunidade_1 = require("./Comunidade");
var Usuario_1 = require("./Usuario");
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
for (var _i = 0, _a = rs.comunidades; _i < _a.length; _i++) {
    var comunidade = _a[_i];
    console.log(comunidade.nome);
    for (var _b = 0, _c = comunidade.usuarios; _b < _c.length; _b++) {
        var usuario = _c[_b];
        console.log(usuario.nome);
    }
}
user1.addAmigo(user2);
//user2.addAmigo(user1)
user3.addAmigo(user3);
