function mediaDeNumeros(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}
console.log(mediaDeNumeros([2, 3, 4, 5, 6, 7, 8, 9]));
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status.Pending);
