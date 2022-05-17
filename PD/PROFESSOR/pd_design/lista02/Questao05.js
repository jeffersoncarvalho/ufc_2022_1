"use strict";
exports.__esModule = true;
var Questao01_1 = require("./Questao01");
var mediaSalarioDoutores = function (professores) {
    var media = 0;
    var qtd = 0;
    for (var i = 0; i < professores.length; i++) {
        if (professores[i].titulacao == Questao01_1.Titulacao.Doutor) {
            media = media + professores[i].salario;
            qtd = qtd + 1;
        }
    }
    return media / qtd;
};
var professores = [
    {
        nome: "Wladimir",
        titulacao: Questao01_1.Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Questao01_1.Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Questao01_1.Titulacao.Mestre,
        departamento: "Computação",
        salario: 6000
    },
    {
        nome: "Wladimir",
        titulacao: Questao01_1.Titulacao.Doutor,
        departamento: "Computação",
        salario: 6000
    }
];
console.log("A média é: " + mediaSalarioDoutores(professores));
