abstract class UnidadeDeAtaque {
    
    forcaDeAtaque:number
    nomeDaUnidade:string

    constructor(forcaDeAtaque:number, nomeDaUnidade:string){
        this.forcaDeAtaque = forcaDeAtaque
        this.nomeDaUnidade = nomeDaUnidade
    }

    abstract atacar():void 

}

class Soldado extends UnidadeDeAtaque {

    atacar(): void {
        //chamaria uma IA
        //renderizaria o soldado na tela
        //iniciava a animação
        console.log(`Soldado ${this.nomeDaUnidade} está atacando com força ${this.forcaDeAtaque}!`)
    }
}

class Tanque extends UnidadeDeAtaque {

    atacar(): void {
        //chamaria uma IA
        //renderizaria o tanque na tela
        //iniciava a animação
        console.log(`Tanque ${this.nomeDaUnidade} está atacando com força ${this.forcaDeAtaque}`)
    }
}

class Jato extends UnidadeDeAtaque {

    atacar(): void {
        //chamaria uma IA
        //renderizaria o jato na tela
        //iniciava a animação
        console.log(`Jato ${this.nomeDaUnidade} está atacando com força ${this.forcaDeAtaque}`)
    }
}

export {UnidadeDeAtaque,Soldado,Tanque,Jato}