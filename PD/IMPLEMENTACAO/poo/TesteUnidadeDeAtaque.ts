import { UnidadeDeAtaque, Soldado, Tanque, Jato } from "./UnidadeDeAtaque";

let soldado1:UnidadeDeAtaque = new Soldado(10,'Ryan')
let tanque1:UnidadeDeAtaque = new Tanque(100,'Tnk0334')
let jato1:UnidadeDeAtaque = new Jato(1000,'Jt00897')

let unidades:UnidadeDeAtaque[] = [soldado1,tanque1,jato1]
for(let i=0;i<unidades.length;i++){
    unidades[i].atacar()
}