function calculadora(x, y, operacao) {
    if (checarValidadeOperacao(operacao) == false) {
        console.log("Operação inválida!");
        return;
    }
    if (operacao == "soma") {
        return x + y;
    }
    else if (operacao == "subtracao") {
        return x - y;
    }
    else if (operacao == "multiplicacao") {
        return x * y;
    }
    return x / y;
}
function checarValidadeOperacao(operacao) {
    if (operacao == "soma" ||
        operacao == "subtracao" ||
        operacao == "multiplicacao" ||
        operacao == "divisao") {
        return true;
    }
    return false;
}
console.log(calculadora(40, 20, "soma"));
console.log(calculadora(34, 12, "subtracao"));
console.log(calculadora(2, 3, "multiplicacao"));
console.log(calculadora(100, 20, "divisao"));
console.log(calculadora(100, 2, "potencia"));
