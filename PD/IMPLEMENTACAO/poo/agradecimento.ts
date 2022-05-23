/*function agradecimento(titulo:string, ...nomes:string[]){
    return titulo + nomes.join(", ") + "!"
}*/

let agradecimento = (titulo:string, ...nomes:string[]) => {
    //console.log(nomes.join("-"))
    return nomes.join(", ") + titulo + "!"
}


console.log(agradecimento(", Bom dia","Jefferson","Rainara"))
console.log(agradecimento(", Boa tarde","Jefferson","Rainara", "Gabriel", "Vivian"))
console.log(agradecimento("Bom dia"))