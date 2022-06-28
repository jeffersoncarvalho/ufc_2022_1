"use strict";
exports.__esModule = true;
exports.Foto = void 0;
var Foto = /** @class */ (function () {
    function Foto(id, imagem) {
        this.imagem = imagem;
        this.id = id;
        this.comentarios = [];
    }
    Foto.prototype.addComentario = function (comentario) {
        this.comentarios.push(comentario);
    };
    return Foto;
}());
exports.Foto = Foto;
