var Estudante = /** @class */ (function () {
    function Estudante(nome, sobrenome, cpf, idade, ira) {
        var _this = this;
        this.getNome = function () {
            return _this.nome;
        };
        this.getNomeCompleto = function () {
            return _this.nome + " " + _this.sobrenome;
        };
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.idade = idade;
        this.ira = ira;
    }
    Estudante.prototype.getCPF = function () {
        return this.cpf;
    };
    Estudante.prototype.getIdade = function () {
        return this.idade;
    };
    Estudante.prototype.getIra = function () {
        return this.ira;
    };
    Estudante.prototype.getSituacao = function () {
        if (this.ira >= 7)
            return 'APROVADO CONCEITO A';
        if (this.ira < 4)
            return 'REPROVADO';
        return 'APROVADO CONCEITO B';
    };
    return Estudante;
}());
var e1 = new Estudante('Jefferson', 'de Carvalho', '111111111', 27, 5.7);
console.log(e1.getNomeCompleto());
console.log(e1.getSituacao());
