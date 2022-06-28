"use strict";
exports.__esModule = true;
exports.Comunidade = void 0;
var Comunidade = /** @class */ (function () {
    function Comunidade(id, nome, imagem) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.usuarios = [];
    }
    Comunidade.prototype.addUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    return Comunidade;
}());
exports.Comunidade = Comunidade;
