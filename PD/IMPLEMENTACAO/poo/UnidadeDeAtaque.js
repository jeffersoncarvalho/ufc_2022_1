"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Jato = exports.Tanque = exports.Soldado = exports.UnidadeDeAtaque = void 0;
var UnidadeDeAtaque = /** @class */ (function () {
    function UnidadeDeAtaque(forcaDeAtaque, nomeDaUnidade) {
        this.forcaDeAtaque = forcaDeAtaque;
        this.nomeDaUnidade = nomeDaUnidade;
    }
    return UnidadeDeAtaque;
}());
exports.UnidadeDeAtaque = UnidadeDeAtaque;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soldado.prototype.atacar = function () {
        //chamaria uma IA
        //renderizaria o soldado na tela
        //iniciava a animação
        console.log("Soldado ".concat(this.nomeDaUnidade, " est\u00E1 atacando com for\u00E7a ").concat(this.forcaDeAtaque, "!"));
    };
    return Soldado;
}(UnidadeDeAtaque));
exports.Soldado = Soldado;
var Tanque = /** @class */ (function (_super) {
    __extends(Tanque, _super);
    function Tanque() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tanque.prototype.atacar = function () {
        //chamaria uma IA
        //renderizaria o tanque na tela
        //iniciava a animação
        console.log("Tanque ".concat(this.nomeDaUnidade, " est\u00E1 atacando com for\u00E7a ").concat(this.forcaDeAtaque));
    };
    return Tanque;
}(UnidadeDeAtaque));
exports.Tanque = Tanque;
var Jato = /** @class */ (function (_super) {
    __extends(Jato, _super);
    function Jato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jato.prototype.atacar = function () {
        //chamaria uma IA
        //renderizaria o jato na tela
        //iniciava a animação
        console.log("Jato ".concat(this.nomeDaUnidade, " est\u00E1 atacando com for\u00E7a ").concat(this.forcaDeAtaque));
    };
    return Jato;
}(UnidadeDeAtaque));
exports.Jato = Jato;
