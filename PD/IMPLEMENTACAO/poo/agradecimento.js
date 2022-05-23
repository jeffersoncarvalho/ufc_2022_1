/*function agradecimento(titulo:string, ...nomes:string[]){
    return titulo + nomes.join(", ") + "!"
}*/
var agradecimento = function (titulo) {
    var nomes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nomes[_i - 1] = arguments[_i];
    }
    //console.log(nomes.join("-"))
    return nomes.join(", ") + titulo + "!";
};
console.log(agradecimento(", Bom dia", "Jefferson", "Rainara"));
console.log(agradecimento(", Boa tarde", "Jefferson", "Rainara", "Gabriel", "Vivian"));
console.log(agradecimento("Bom dia"));
