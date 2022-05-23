function questao04(base, potencia) {
    var res = 1;
    for (var i = 0; i < potencia; i++)
        res = res * base;
    return res;
}
console.log(questao04(2, 5));
