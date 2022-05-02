
const questa07 = (alunos:[string,number][]) => {
    let media:number = 0
    for(let i=0;i<alunos.length;i++){
        media += alunos[i][1]
    }
    media = media/alunos.length
    console.log(media)

    for(let i=0;i<alunos.length;i++){
        if(alunos[i][1]>=media) console.log(alunos[i][0])
    }
}
//          [0     ,   1  ]
let alunos: [string,number][];

alunos = [
    ["Jefferson",4.5],
    ["Maria",9],
    ["Vivian",5.2],
    ["Gabriel",7.0],
    ["Wladimir",10]
]

questa07(alunos)