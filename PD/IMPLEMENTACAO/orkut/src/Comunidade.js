"use strict";
exports.__esModule = true;
exports.Comunidade = void 0;
var Comunidade = /** @class */ (function () {
    function Comunidade(id, nome, imagem) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.usuarios = [];
        this.foruns = [];
    }
    Comunidade.prototype.addUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    Comunidade.prototype.addForum = function (forum) {
        this.foruns.push(forum);
    };
    Comunidade.prototype.setCategoria = function (categoria) {
        this.categoria = categoria;
    };
    return Comunidade;
}());
exports.Comunidade = Comunidade;
