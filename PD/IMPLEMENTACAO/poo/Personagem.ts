enum Forca {
    FRACO,
    MEDIO,
    FORTE
}
enum Direcao {
    FRENTE = 'FRENTE',
    TRAS = 'TRAS',
    BAIXO = 'BAIXO',
    CIMA = 'CIMA'
}

class Personagem {
    nome:string
    idade:number
    estilo:string
    peso:number
    magia:string

    constructor(nome,magia){
        this.nome = nome
        this.magia = magia
    }

    socar(forca:Forca):void{
        console.log('socar com força: ' + forca)
    }

    chutar(forca:Forca):void{
        console.log(`chutar com forca ${forca}`)
    }

    pular(direcao:Direcao){
        console.log('pular na direção: ' + direcao)
    }

    soltarMagia(velocidade:Forca):void{
        console.log(`Soltar magia ${this.magia}` )
    }

    combo1():void{
        this.socar(Forca.FRACO)
        this.chutar(Forca.MEDIO)
        this.pular(Direcao.TRAS)
        this.soltarMagia(Forca.FORTE)
    }
}

let ryu:Personagem = new Personagem('Ryu','Hadouken')
ryu.combo1()
