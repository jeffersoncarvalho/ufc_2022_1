"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.comunidades = [];
        this.amizades = [];
        this.fotos = [];
    }
    Usuario.prototype.addComunidade = function (comunidade) {
        this.comunidades.push(comunidade);
        comunidade.addUsuario(this);
    };
    Usuario.prototype.ehForeverAlone = function (usuario) {
        if (this.id === usuario.id)
            return true;
        return false;
    };
    Usuario.prototype.ehMeuAmigo = function (usuario) {
        for (var _i = 0, _a = this.amizades; _i < _a.length; _i++) {
            var amigo = _a[_i];
            if (usuario.id === amigo.id)
                return true;
        }
        return false;
    };
    Usuario.prototype.addAmigo = function (usuario) {
        //testar se eu não estou tentando ser amigo de mim mesmo!
        if (this.ehForeverAlone(usuario)) {
            console.log('Forever alone');
            return;
        }
        //testar se já tenho amizade com usuário!
        if (this.ehMeuAmigo(usuario) === true) {
            console.log('Já é meu amigo!');
            return;
        }
        this.amizades.push(usuario); //meu amigo
        usuario.amizades.push(this);
    };
    Usuario.prototype.addFoto = function (foto) {
        this.fotos.push(foto);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
