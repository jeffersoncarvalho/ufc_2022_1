var Estudante = /** @class */ (function () {
    //só é chamado no new
    function Estudante(matricula, nome, ira) {
        this.matricula = matricula;
        this.nome = nome;
        this.ira = ira;
    }
    Estudante.prototype.setDisciplinas = function (disciplinas) {
        this.disciplinas = disciplinas;
    };
    Estudante.prototype.setCurso = function (curso) {
        this.curso = curso;
    };
    Estudante.prototype.calcularMediaGeral = function () {
        var media = 0;
        for (var i = 0; i < this.disciplinas.length; i++) {
            media = media + this.disciplinas[i].nota;
        }
        return media / this.disciplinas.length;
    };
    return Estudante;
}());
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
    return Disciplina;
}());
var d1 = new Disciplina('FUP', 7.5);
var d2 = new Disciplina('WEB', 8.4);
var d3 = new Disciplina('POO', 5.5);
var e1 = new Estudante('0001234', 'Jefferson', 6.9);
//console.log(e1.disciplinas)
e1.setCurso('Design Digital');
e1.setDisciplinas([d1, d2, d3]);
console.log(e1.nome);
console.log(e1.disciplinas);
console.log(e1.curso);
console.log(e1.calcularMediaGeral());
