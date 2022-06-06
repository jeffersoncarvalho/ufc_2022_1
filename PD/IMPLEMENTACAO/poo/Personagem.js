var Forca;
(function (Forca) {
    Forca[Forca["FRACO"] = 0] = "FRACO";
    Forca[Forca["MEDIO"] = 1] = "MEDIO";
    Forca[Forca["FORTE"] = 2] = "FORTE";
})(Forca || (Forca = {}));
var Direcao;
(function (Direcao) {
    Direcao["FRENTE"] = "FRENTE";
    Direcao["TRAS"] = "TRAS";
    Direcao["BAIXO"] = "BAIXO";
    Direcao["CIMA"] = "CIMA";
})(Direcao || (Direcao = {}));
var Personagem = /** @class */ (function () {
    function Personagem(nome, magia) {
        this.nome = nome;
        this.magia = magia;
    }
    Personagem.prototype.socar = function (forca) {
        console.log('socar com força: ' + forca);
    };
    Personagem.prototype.chutar = function (forca) {
        console.log("chutar com forca ".concat(forca));
    };
    Personagem.prototype.pular = function (direcao) {
        console.log('pular na direção: ' + direcao);
    };
    Personagem.prototype.soltarMagia = function (velocidade) {
        console.log("Soltar magia ".concat(this.magia));
    };
    return Personagem;
}());
var ryu = new Personagem('Ryu', 'Hadouken');
ryu.socar(Forca.FRACO);
ryu.chutar(Forca.MEDIO);
ryu.pular(Direcao.TRAS);
ryu.soltarMagia(Forca.FORTE);
