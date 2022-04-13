let ponto1 = {x:10,y:20}
let ponto2 = {x:14,y:30}

let distancia = Math.sqrt( (ponto2.x - ponto1.x)*(ponto2.x - ponto1.x)  
                            +
                           (ponto2.y - ponto1.y)*(ponto2.y - ponto1.y))
console.log(distancia)