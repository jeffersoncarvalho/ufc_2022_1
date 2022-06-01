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
var Veiculo = /** @class */ (function () {
    function Veiculo(rodas, potencia, placa) {
        this.rodas = rodas;
        this.potencia = potencia;
        this.placa = placa;
    }
    Veiculo.prototype.toString = function () {
        return "Ve\u00EDculo ".concat(this.rodas);
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(portas, rodas, potencia, placa) {
        var _this = _super.call(this, rodas, potencia, placa) || this;
        _this.portas = portas;
        return _this;
    }
    Carro.prototype.toString = function () {
        return "Carro ".concat(this.portas);
    };
    return Carro;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(bau, rodas, potencia, placa) {
        var _this = _super.call(this, rodas, potencia, placa) || this;
        _this.bau = bau;
        return _this;
    }
    return Moto;
}(Veiculo));
//=============================================
var v1 = new Veiculo(4, 220, 'XXX-1111');
var c1 = new Carro(4, 10, 110, 'ZZZ-2222');
var m1 = new Moto(true, 2, 55, 'TTT-KK00');
//=============================================
var c2 = new Carro(3, 4, 60, 'CCC-3333');
var m2 = new Moto(true, 2, 40, 'VVV-KKKL');
console.log(c1.toString());
