function questao02(numeros) {
    var maior, menor;
    //lógica
    maior = numeros[0];
    menor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior)
            maior = numeros[i];
        if (numeros[i] < menor)
            menor = numeros[i];
    }
    return [maior, menor];
}
console.log(questao02([-8, -34, 100, 234, 0, 10, 44, 8]));
