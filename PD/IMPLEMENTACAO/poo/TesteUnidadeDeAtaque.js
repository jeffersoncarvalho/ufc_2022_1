"use strict";
exports.__esModule = true;
var UnidadeDeAtaque_1 = require("./UnidadeDeAtaque");
var soldado1 = new UnidadeDeAtaque_1.Soldado(10, 'Ryan');
var tanque1 = new UnidadeDeAtaque_1.Tanque(100, 'Tnk0334');
var jato1 = new UnidadeDeAtaque_1.Jato(1000, 'Jt00897');
var unidades = [soldado1, tanque1, jato1];
for (var i = 0; i < unidades.length; i++) {
    unidades[i].atacar();
}
