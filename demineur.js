module.exports = function generateMinesweeper() {
    const howManyRastapopoulos = Math.floor(Math.random() * 6) + 10;
    const arr64 = [...Array(64).keys()] ;
    const arr64Random = arr64.sort(() => Math.random() - 0.5);
    const rastapopoulos = new Array(howManyRastapopoulos);


    for (let i = 0; i < howManyRastapopoulos; i++) {
        rastapopoulos[i] = arr64Random[i];
        
    }
    //rastapopoulos est une array qui contient howManyRastapopoulos nombres aléatoires.
    console.log(... rastapopoulos);
    console.log(howManyRastapopoulos);

    const positions = Array(64).fill(0, 0);
    //positions est une array qui contient pour l'instant 64 zéro. Y'a sûrement des moyens beaucoup moins ridicules de créer ça mdr.
    console.log (...positions);

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


    for (let l = 0; l < rastapopoulos.length; l++){
        rastapopoulosDetector(rastapopoulos[l]);
    }

    console.log(...rastapopoulos);
    console.log(...positions);
    //les bombbes ont toutes augmenté les cases autour d'elles de 1. Positions décrit combien de bombes il y a autour de chacune de ses valeurs, mais pas où sont les bombes.

    function numberString(y , z){
        if (y === 0) {
            positions[z] = '||:zero:||';
        } else if (y == 1) {
            positions[z] = '||:one:||';
        } else if (y == 2){
            positions[z] = '||:two:||';
        } else if (y == 3){
            positions[z] = '||:three:||';
        } else if (y == 4){
            positions[z] = '||:four:||';
        } else if (y == 5){
            positions[z] = '||:five:||';
        } else if (y == 6){
            positions[z] = '||:six:||';
        } else if (y == 7){
            positions[z] = '||:seven:||';
        } else if (y == 8){
            positions[z] = '||:eight:||';
        }
    }

    for (let k = 0; k < positions.length; k++){
        numberString(positions[k] , k);
    }
    //maintenant, notre array positions est composée des strings nécessaires pour en faire des émojis cachés sur discord.

    for (let m = 0; m < rastapopoulos.length; m++){
        positions[rastapopoulos[m]] = '||<:Rastapopoulos:608321617482874913>||';
    }
    //les cases qui contenaient des bombes s'appellent maintenant rastapopulos.

    const spliceNumbers = Array(8)

    console.log(...positions);

    for (n = 0; n < 64; n++){
        if(Math.floor(n / 8) != Math.floor((n + 1) / 8)){
            spliceNumbers[Math.floor(n / 8)] = n;
        }
    }
    //spliceNumber est une array qui contient les chiffres de la dernière colonne.

    for (o = 8; o <= 64; o += 9) {
        const jumpLine = positions.splice(o, 0, "\n");
    }
    //on rajoute \n à la fin de chaque colonne pour passer à la ligne

    

    return {
        positions: positions.join``,
        howManyRastapopoulos
    };
}
