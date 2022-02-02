//npm install prompt-sync
const prompt = require('prompt-sync')
const myMprompt = prompt()

var distance = myMprompt("Digite aqui a distância");

if (distance >= 6 && distance <= 800008) {
    console.log("distância aprovada");
}