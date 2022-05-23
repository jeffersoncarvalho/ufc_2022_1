var vetorNumeros = [20, 45, 10, 34, 60, 100, 34];
var media;
var soma = 0;
for (var i = 0; i < vetorNumeros.length; i++) {
    soma = soma + vetorNumeros[i];
}
media = soma / vetorNumeros.length;
console.log(media);
for (var i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] >= media) {
        console.log(vetorNumeros[i]);
    }
}
