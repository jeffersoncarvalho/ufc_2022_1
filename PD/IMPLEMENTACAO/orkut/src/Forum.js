"use strict";
exports.__esModule = true;
exports.Forum = void 0;
var Forum = /** @class */ (function () {
    function Forum(id, titulo, comunidade) {
        this.id = id;
        this.titulo = titulo;
        this.mensagens = [];
        this.comunidade = comunidade;
    }
    Forum.prototype.addMensagem = function (mensagem) {
        var fazParte = false;
        for (var _i = 0, _a = this.comunidade.usuarios; _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario.id === mensagem.usuario.id) {
                fazParte = true;
                break;
            }
        }
        if (fazParte)
            this.mensagens.push(mensagem);
        else
            console.log(mensagem.usuario.nome + " não faz parte da comunidade " + this.comunidade.nome);
    };
    return Forum;
}());
exports.Forum = Forum;
