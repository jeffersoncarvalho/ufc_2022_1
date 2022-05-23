function questao01(a:number,b:number,c:number):[number,number]{
    let maior,menor

    if(a>b && b>c){
        maior = a
        menor = c
    }else if(a>c && c>b){
        maior = a
        menor = b
    }else if(b>a && a>c){
        maior = b
        menor = c
    }else if(b>c && c>a){
        maior = b
        menor = a
    }else if(c>a && a>b){
        maior = c
        menor = b
    }else{
        maior = c
        menor = a
    }

    return [maior,menor]

}

console.log(questao01(45,-8,100))