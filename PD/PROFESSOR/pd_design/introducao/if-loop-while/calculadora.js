var operacao = 'subtracao';
var x = 10;
var y = 15;
switch (operacao) {
    case ('soma'):
        console.log(x + y);
        break;
    case ('subtracao'):
        console.log(x - y);
        break;
    case ('multiplicacao'):
        console.log(x * y);
        break;
    case ('divisao'):
        console.log(x / y);
        break;
    default:
        console.log('Operacao Inválida!');
}
