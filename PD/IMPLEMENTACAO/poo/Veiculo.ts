class Veiculo {
    rodas:number
    potencia:number
    placa:string

    constructor(rodas:number,potencia:number,placa:string){
        this.rodas = rodas
        this.potencia = potencia
        this.placa = placa
    }

    toString():string{
        return `Veículo ${this.rodas}`
    }
}

class Carro extends Veiculo{

    portas:number

    constructor(portas:number,rodas:number,potencia:number,placa:string){
        super(rodas,potencia,placa)
        this.portas = portas
    }

    toString(): string {
        return `Carro ${this.portas}`
    }
}

class Moto extends Veiculo{

    bau:boolean

    constructor(bau:boolean,rodas:number,potencia:number,placa:string){
        super(rodas,potencia,placa)
        this.bau = bau
    }
}
//=============================================
let v1:Veiculo = new Veiculo(4,220,'XXX-1111')
let c1:Carro = new Carro(4,10,110,'ZZZ-2222')
let m1:Moto = new Moto(true,2,55,'TTT-KK00')
//=============================================
let c2:Veiculo = new Carro(3,4,60,'CCC-3333')
let m2:Veiculo = new Moto(true,2,40,'VVV-KKKL')

console.log(c1.toString())