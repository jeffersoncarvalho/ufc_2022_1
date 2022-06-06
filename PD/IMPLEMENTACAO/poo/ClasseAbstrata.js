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
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.andar = function () {
        console.log('Pessoa andando!');
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Estudante.prototype.falar = function () {
        console.log('Estudante falando!');
    };
    Estudante.prototype.andar = function () {
        console.log('Estudante andando!');
    };
    return Estudante;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.falar = function () {
        console.log('Professor falando!');
    };
    Professor.prototype.andar = function () {
        console.log('Professor andando!');
    };
    return Professor;
}(Pessoa));
var LadyGaga = /** @class */ (function (_super) {
    __extends(LadyGaga, _super);
    function LadyGaga(nome, idade) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.idade = idade;
        return _this;
    }
    LadyGaga.prototype.falar = function () {
        console.log('Lady Gaga cantando!');
    };
    LadyGaga.prototype.andar = function () {
        console.log('Diva desfila!');
    };
    return LadyGaga;
}(Pessoa));
var DoContra = /** @class */ (function (_super) {
    __extends(DoContra, _super);
    function DoContra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoContra.prototype.falar = function () {
        console.log('Do contra falando!');
    };
    DoContra.prototype.andar = function () {
        _super.prototype.andar.call(this);
        console.log('Eu vou é correr!');
    };
    return DoContra;
}(Pessoa));
var p1 = new Estudante();
var p2 = new Estudante();
var p3 = new Professor();
var p4 = new LadyGaga('Nome Dela', 35);
var p5 = new DoContra();
var pessoas = [p1, p5, p2, p3];
for (var i = 0; i < pessoas.length; i++) {
    pessoas[i].falar();
    pessoas[i].andar();
}
