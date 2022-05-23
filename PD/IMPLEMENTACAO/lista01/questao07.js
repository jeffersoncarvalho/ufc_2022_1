var questa07 = function (alunos) {
    var media = 0;
    var res = [];
    for (var i = 0; i < alunos.length; i++) {
        media += alunos[i][1];
    }
    media = media / alunos.length;
    console.log(media);
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i][1] >= media)
            res.push(alunos[i][0]);
    }
    return res;
};
//          [0     ,   1  ]
var alunos;
alunos = [
    ["Jefferson", 4.5],
    ["Maria", 9],
    ["Vivian", 5.2],
    ["Gabriel", 7.0],
    ["Wladimir", 10]
];
console.log(questa07(alunos));
