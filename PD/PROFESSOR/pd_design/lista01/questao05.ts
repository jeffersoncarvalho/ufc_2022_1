const questao05 = (a:number,b:number,c:number):[number,number] => {

    let delta = b*b - 4*a*c

    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)

    return[x1,x2]
}

