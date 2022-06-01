interface IUnidade {
    atacar():void
}

class Cavaleiro implements IUnidade{
    atacar(): void {
        console.log('Cavaleiro ataca!')
    }
}

class Arqueiro implements IUnidade{
    atacar(): void {
        console.log('Arqueiro ataca!')
    }
}

class Catapulta implements IUnidade{
    atacar(): void {
        console.log('Catapulta ataca!')
    }
}

let u1:IUnidade = new Cavaleiro()
let u2:IUnidade = new Arqueiro()
let u3:IUnidade = new Catapulta()
let u4:IUnidade = new Arqueiro()


let selecao:IUnidade[] = [u1,u2,u3,u4]
//let numeros:number[] = [1,4,8,9.2]

for(let i=0;i<selecao.length;i++){
    selecao[i].atacar()
}