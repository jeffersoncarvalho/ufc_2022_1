var Titulacao;
(function (Titulacao) {
    Titulacao["Doutor"] = "DOUTOR";
    Titulacao["Mestre"] = "MESTRE";
    Titulacao["Graduado"] = "GRADUADO";
})(Titulacao || (Titulacao = {}));
var professorDr = {
    nome: "Wladimir",
    titulacao: Titulacao.Doutor,
    departamento: "Computação",
    salario: 6000
};
var professorMestre = {
    nome: "João",
    titulacao: Titulacao.Mestre,
    departamento: "Computação",
    salario: 5000
};
var professorGraduado = {
    nome: "Bruno",
    titulacao: Titulacao.Graduado,
    departamento: "Computação",
    salario: 4000
};
console.log(professorDr);
console.log(professorMestre);
console.log(professorGraduado);

