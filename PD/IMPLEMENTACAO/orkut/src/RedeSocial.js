"use strict";
exports.__esModule = true;
exports.RedeSocial = void 0;
var RedeSocial = /** @class */ (function () {
    function RedeSocial(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.comunidades = [];
    }
    RedeSocial.prototype.addComunidade = function (comunidade) {
        this.comunidades.push(comunidade);
    };
    return RedeSocial;
}());
exports.RedeSocial = RedeSocial;
