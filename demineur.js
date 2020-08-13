const { Client } = require("discord.js");
const token = require("./config/token.json");

const cocotte = new Client();
cocotte.login(token);


const howManyRastapopoulos = Math.floor(Math.random() * 6) + 10;
const arr64 = [...Array(64).keys()] ;
const arr64Random = arr64.sort(() => Math.random() - 0.5);
const rastapopoulos = new Array(howManyRastapopoulos);
let i = 0;


for (let val of arr64) {
    if (i >= howManyRastapopoulos) {
        break;
    }
    else {
    rastapopoulos[i] = arr64Random[i];
    }
    i++;
}
//rastapopoulos est une array qui contient howManyRastapopoulos nombres aléatoires.

const positions = Array(64);

for (let j=0; j<=63; j++) {
    positions[j] = 0;
    j++
    
}
//positions est une array qui contient pour l'instant 64 zéro. Y'a sûrement des moyens beaucoup moins ridicules de créer ça mdr.

function rastapopoulosDetector(x) {
    if (x === 0) {
        positions[x + 1]++;
        positions[x + 8]++;
        positions[x + 9]++;
    } else if (x == 7){
        positions[x - 1]++;
        positions[x + 7]++;
        positions[x + 8]++;
    } else if (x == 56){
        positions[x - 8]++;
        positions[x - 7]++;
        positions[x + 1]++;
    } else if (x == 63){
        positions[x - 9]++;
        positions[x - 8]++;
        positions[x - 1]++;
    } else if (x - 8 < 0 && x !== 0 && x != 7) {
        positions[x - 1]++;
        positions[x + 1]++;
        positions[x + 7]++;
        positions[x + 8]++;
        positions[x + 9]++;
    } else if (x + 8 > 63 && x != 56 && x != 7) {
        positions[x - 9]++;
        positions[x - 8]++;
        positions[x - 7]++;
        positions[x - 1]++;
        positions[x + 1]++;
    } else if (Math.floor(x / 8) != Math.floor((x - 1) / 8) && x !== 0 && x != 56){
        positions[x - 8]++;
        positions[x - 7]++;
        positions[x + 1]++;
        positions[x + 8]++;
        positions[x + 9]++;
    } else if (Math.floor(x / 8) != Math.floor((x + 1) / 8) && x != 7 && x != 63){
        positions[x - 9]++;
        positions[x - 8]++;
        positions[x - 1]++;
        positions[x + 7]++;
        positions[x + 8]++;
    } else {
        positions[x - 9]++;
        positions[x - 8]++;
        positions[x - 7]++;
        positions[x - 1]++;
        positions[x + 1]++;
        positions[x + 7]++;
        positions[x + 8]++;
        positions[x + 9]++;
    }
}

let l = 0
for (let val of rastapopoulos){
    rastapopoulosDetector(rastapopoulos[l]);
    l++;
}

//les bombbes ont toutes augmenté les cases autour d'elles de 1. Positions décrit combien de bombes il y a autour de chacune de ses valeurs, mais pas où sont les bombes.

let k = 0

function numberString(y){
    if (y === 0) {
        positions[k] = '||:zero:||';
    } else if (y == 1) {
        positions[k] = '||:one:||';
    } else if (y == 2){
        positions[k] = '||:two:||';
    } else if (y == 3){
        positions[k] = '||:three:||';
    } else if (y == 4){
        positions[k] = '||:four:||';
    } else if (y == 5){
        positions[k] = '||:five:||';
    } else if (y == 6){
        positions[k] = '||:six:||';
    } else if (y == 7){
        positions[k] = '||:seven:||';
    } else if (y == 8){
        positions[k] = '||:eight:||';
    }
}

for (let val of positions){
    numberString(positions[k]);
    k++;
}
//maintenant, notre array positions est composée des strings nécessaires pour en faire des émojis cachés sur discord.

let m = 0
for (let val of rastapopoulos){
    positions[rastapopoulos[m]] = '||:Rastapopoulos:||';
    m++;
}
//les cases qui contenaient des bombes s'appellent maintenant rastapopulos.
