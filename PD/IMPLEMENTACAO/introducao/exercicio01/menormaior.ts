var x:number,y:number,z:number
x = 10
y = 40
z = 9

if(x>y && y>z) console.log("X é maior, Z é menor")
else if (x>z && z>y) console.log("X é maior, Y é menor")
else if(y>x && x>z) console.log("Y é maior, Z é menor")
else if (y>z && z>x) console.log("Y é maior, X é menor")
else if(z>x && x>y) console.log("Z é maior, Y é menor")
else console.log("Z é maior, X é menor")
