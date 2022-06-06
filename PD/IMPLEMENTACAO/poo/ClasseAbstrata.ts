abstract class Pessoa {
    nome:string
    idade:number

    abstract falar():void

    andar():void{
        console.log('Pessoa andando!')
    }
}

class Estudante extends Pessoa {
    ira:number

    falar(): void {
        console.log('Estudante falando!')
    }

    andar():void{
        console.log('Estudante andando!')
    }
}

class Professor extends Pessoa{
    titulacao:string

    falar(): void {
        console.log('Professor falando!')
    }

    andar(): void {
        console.log('Professor andando!')
    }
}

class LadyGaga extends Pessoa {
    
    constructor(nome:string,idade:number){
        super()
        this.nome = nome
        this.idade = idade
    }

    falar(): void {
        console.log('Lady Gaga cantando!')
    }

    andar(): void {
        console.log('Diva desfila!')
    }
}

class DoContra extends Pessoa {
    
    falar(): void {
        console.log('Do contra falando!')
    }

    andar(): void {
       super.andar() 
       console.log('Eu vou é correr!')
    }
}

let p1:Pessoa = new Estudante()
let p2:Pessoa = new Estudante()
let p3:Pessoa = new Professor()
let p4:Pessoa = new LadyGaga('Nome Dela',35)
let p5:Pessoa = new DoContra()

let pessoas:Pessoa[] = [p1,p5,p2,p3]

for(let i=0;i<pessoas.length;i++){
    pessoas[i].falar()
    pessoas[i].andar()
}
    