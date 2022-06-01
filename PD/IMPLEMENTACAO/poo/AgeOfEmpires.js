var Cavaleiro = /** @class */ (function () {
    function Cavaleiro() {
    }
    Cavaleiro.prototype.atacar = function () {
        console.log('Cavaleiro ataca!');
    };
    return Cavaleiro;
}());
var Arqueiro = /** @class */ (function () {
    function Arqueiro() {
    }
    Arqueiro.prototype.atacar = function () {
        console.log('Arqueiro ataca!');
    };
    return Arqueiro;
}());
var Catapulta = /** @class */ (function () {
    function Catapulta() {
    }
    Catapulta.prototype.atacar = function () {
        console.log('Catapulta ataca!');
    };
    return Catapulta;
}());
var u1 = new Cavaleiro();
var u2 = new Arqueiro();
var u3 = new Catapulta();
var u4 = new Arqueiro();
var selecao = [u1, u2, u3, u4];
//let numeros:number[] = [1,4,8,9.2]
for (var i = 0; i < selecao.length; i++) {
    selecao[i].atacar();
}
