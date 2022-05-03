var potencia = function (base, expoente) {
    var res = 1;
    for (var i = 0; i < expoente; i++) {
        res = res * base;
    }
    return res;
};
function questao10(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        console.log(potencia(vetor[i], 3));
    }
}
questao10([2, 4, 3, 5, 1, 7]);
