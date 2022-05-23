var arrayInteiros2 = [-2, 5, 19, 12, -4, 6, 9];
var soma2 = 0;
var j = 0;
do {
    if (arrayInteiros2[j] >= 0) {
        soma2 = soma2 + arrayInteiros2[j];
        j++;
    }
} while (arrayInteiros2[j] >= 0);
if (j > 0)
    var media2 = soma2 / j;
console.log('Média: ' + media2);
console.log("Média: " + media2);
console.log("M\u00E9dia: ".concat(media2));
