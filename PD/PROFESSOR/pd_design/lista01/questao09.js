var media = function (vetor) {
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }
    return soma / vetor.length;
};
function questao09(vetor1, vetor2) {
    var minhaMedia = media(vetor1);
    var res = [];
    for (var i = 0; i < vetor2.length; i++) {
        if (vetor2[i] > minhaMedia) {
            //console.log(vetor2[i])
            res.push(vetor2[i]);
        }
    }
    return res;
}
console.log(questao09([2, 4, 6], [-8, 1, 0, 3, 6, 8, 2, 10]));
