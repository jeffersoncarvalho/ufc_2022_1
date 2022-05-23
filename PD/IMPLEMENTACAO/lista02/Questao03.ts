interface Editoras {
    codEditora: number
    razaoSocial: string
    contato: string
    telefone: string[]
}

interface Livros {
    codigo: number
    descricao: string
    ISBN: string
    editora: Editoras
}

let editora1 = { 
    codEditora: 1, 
    razaoSocial: "Editora Saber LTDA", 
    contato: "saber@saber.br", 
    telefone: ["3333 3333 3333","0004444 99 000"] 
}

let livro1: Livros = {
    codigo: 1,
    descricao: "O Senhor dos Anéis",
    ISBN: "09092//AAA34332",
    editora: editora1
}