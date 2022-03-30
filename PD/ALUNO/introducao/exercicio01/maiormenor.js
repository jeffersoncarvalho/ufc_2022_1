var x, y, z;
x = 100;
y = 4;
z = -34;
if (x > y && y > z)
    console.log('X é maior e Z é menor');
else if (x > z && z > y)
    console.log('X é maior e Y é menor');
else if (y > x && x > z)
    console.log('Y é maior e Z é menor');
else if (y > z && z > x)
    console.log('Y é maior e X é menor');
else if (z > x && x > y)
    console.log('Z é maior e Y é menor');
else
    console.log('Z é maior e X é menor');
