/*var y = 10, z = 3
for(let i=0; i<10; i++) {
    console.log(`Valor de i: ${i} y: ${y} z: ${z}`) //crase
    console.log(" Valor de i: " + i + " y: " + y + " z: " + z)
    console.log('Valor de i:' + i)
}*/
var vetor = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
/*for(let i=0; i<vetor.length; i++){
    console.log(vetor[i])
}*/
for (var _i = 0, vetor_1 = vetor; _i < vetor_1.length; _i++) {
    var elemento = vetor_1[_i];
    console.log(elemento);
}
