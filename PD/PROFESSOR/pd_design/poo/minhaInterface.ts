interface IAluno {
    
    matricula: number
    nome: string
    sobrenome: string
    ira: number

    calcularIra():number
    listarTurmas(semestre:string):string[]
}

interface PontoCartesiano3D{
    x:number
    y:number
    z:number
}

let ponto1: PontoCartesiano3D = {x:4,y:5,z:-12}
let ponto2: PontoCartesiano3D = {x:-3,y:8,z:-5}

let calculo = ponto1.x*ponto2.z - ponto1.y

interface Ponto2D{
    x:number
    y:number
}

let p1: Ponto2D = {x:4,y:10}
let p2: Ponto2D = {x:6,y:15}

let distancia = Math.sqrt( (p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y) )

interface IMinhaInterface {
    (x:number,y:string):boolean
}

function minhaFuncao(x:number,y:string):boolean{
    console.log(x+y)
    return true
}

let minhaVariavel:IMinhaInterface = minhaFuncao