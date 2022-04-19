var Empregado = /** @class */ (function () {
    function Empregado() {
    }
    Empregado.prototype.calcularSalario = function (titulacao) {
        if (titulacao == "tecnico")
            return 1200;
        else if (titulacao == "graduado")
            return 1800;
        else if (titulacao == "mestre")
            return 2500;
        return 3000;
    };
    return Empregado;
}());
var empregado = new Empregado();
console.log(empregado.calcularSalario("graduado"));
