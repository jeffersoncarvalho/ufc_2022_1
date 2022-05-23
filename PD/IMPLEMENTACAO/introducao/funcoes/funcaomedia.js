function mediainteirosclassica(vetorInteiros) {
    var soma = 0;
    for (var i = 0; i < vetorInteiros.length; i++) {
        soma = soma + vetorInteiros[i];
    }
    return soma / vetorInteiros.length;
}
var alunoAprovadoOuNao = function (nota1, nota2) {
    if ((nota1 + nota2) / 2 >= 7)
        return true;
    else
        return false;
};
console.log(mediainteirosclassica([2, 6, 7, 9, 10, 12]).toFixed(2));
console.log(alunoAprovadoOuNao(7, 4));
