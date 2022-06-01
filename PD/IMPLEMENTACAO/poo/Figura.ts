interface IFigura{
    cor:string
    desenhar():void
}

interface IFigura2D{
    x:number
    y:number
    area():number
}

interface IFigura3D{
    x:number
    y:number
    z:number
    volume():number
}

class Triangulo implements IFigura,IFigura2D{
   cor:string
   x:number
   y:number 

   desenhar(): void {
       console.log('Desenhando um Triangulo')
   }
   
   area(): number{
       return 5
   }
}

class Cilindro implements IFigura,IFigura3D{
    cor:string
    x:number
    y:number
    z:number

    desenhar(): void {
        console.log('Desenhando um Cilindro')
    }

    volume(): number {
        return 30
    }
}

let t1:IFigura = new Triangulo()
let t2:IFigura2D = new Triangulo()
let t3:Triangulo = new Triangulo()

console.log(t3.area())