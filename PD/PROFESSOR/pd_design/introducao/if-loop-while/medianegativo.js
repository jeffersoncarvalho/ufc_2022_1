var arrayInteiros = [2, 5, 19, 12, -4, 6, 9];
var soma = 0;
var i = 0;
while (arrayInteiros[i] >= 0) {
    soma = soma + arrayInteiros[i];
    i = i + 1;
}
var media = soma / i;
console.log('Média: ' + media);
console.log("Média: " + media);
console.log("M\u00E9dia: ".concat(media));
