var questao08 = function (indecisos) {
    var resultado = [];
    for (var i = 0; i < indecisos.length; i++) {
        //console.log(typeof(indecisos[i]))
        resultado.push(typeof (indecisos[i]));
    }
    return resultado;
};
var res = questao08([7, false, true, 5.6, "oi", 'oi', true]);
console.log(res[2]);
