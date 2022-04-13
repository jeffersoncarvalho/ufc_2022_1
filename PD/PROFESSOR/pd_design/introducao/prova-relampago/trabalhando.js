var dia = 7;
var hora = 8;
var minuto = 30;
if (dia == 1) {
    console.log("Não está trabalhando, é domingo!");
}
else {
    if (dia == 7) {
        if ((hora >= 8 && hora < 12) && (minuto >= 0 && minuto < 60)) {
            console.log("Trabalhando no sábado!");
        }
        else {
            console.log("Não trabalha neste horário no sábado!");
        }
    }
    else {
        if (((hora >= 8 && hora < 12) || (hora >= 14 && hora < 18))
            && (minuto >= 0 && minuto < 60)) {
            console.log("Trabalhando durante a semana.");
        }
        else {
            console.log("Não trabalha neste horário na semana.");
        }
    }
}
