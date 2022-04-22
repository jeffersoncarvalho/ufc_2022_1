var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 1] = "Domingo";
    DiasSemana[DiasSemana["Segunda"] = 2] = "Segunda";
    DiasSemana[DiasSemana["Terca"] = 3] = "Terca";
    DiasSemana[DiasSemana["Quarta"] = 4] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 5] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 6] = "Sexta";
    DiasSemana[DiasSemana["Sabado"] = 7] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
function diaUtil(dia) {
    if (dia >= DiasSemana.Segunda && dia <= DiasSemana.Sexta)
        return true;
    return false;
}
console.log(diaUtil(3));
