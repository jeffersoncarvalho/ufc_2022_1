enum JoKenPo {
    PAPEL = "PAPEL",
    PEDRA = "PEDRA",
    TESOURA = "TESOURA" 
}



function joKenPo(jogador1:JoKenPo, jogador2:JoKenPo):string{

    if(jogador1 == jogador2) return "Empate!"

    if(jogador1 == JoKenPo.PAPEL && jogador2 == JoKenPo.PEDRA) return "Jogador 1"
    if(jogador1 == JoKenPo.PEDRA && jogador2 == JoKenPo.TESOURA) return "Jogador 1"
    if(jogador1 == JoKenPo.TESOURA && jogador2 == JoKenPo.PAPEL) return "Jogador 1"

    return "Jogador 2"
}

console.log(joKenPo(JoKenPo.PAPEL,JoKenPo.TESOURA))