/*var y = 10, z = 3
for(let i=0; i<10; i++) {
    console.log(`Valor de i: ${i} y: ${y} z: ${z}`) //crase
    console.log(" Valor de i: " + i + " y: " + y + " z: " + z)
    console.log('Valor de i:' + i)
}*/

let vetor = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']

/*for(let i=0; i<vetor.length; i++){
    console.log(vetor[i])
}*/

for(let elemento of vetor){
    console.log(elemento)
}