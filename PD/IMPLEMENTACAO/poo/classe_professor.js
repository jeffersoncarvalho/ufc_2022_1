var ProfessorUFC = /** @class */ (function () {
    function ProfessorUFC(codigo, titulacao) {
        this.codigo = codigo;
        this.titulacao = titulacao;
    }
    ProfessorUFC.prototype.getSalario = function () {
        if (this.titulacao == "Doutor")
            return 10000;
        else if (this.titulacao = "Mestre")
            return 6000;
        else
            return 4000;
    };
    return ProfessorUFC;
}());
var prof1 = new ProfessorUFC("1111", "Mestre");
console.log(prof1.getSalario());
