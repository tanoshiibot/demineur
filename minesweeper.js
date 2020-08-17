module.exports = function generateMinesweeper(howManyBombs = 16 , emoji = '\u{1F4A3}') {
    const arr64 = [...Array(64).keys()] ;
    const arr64Random = arr64.sort(() => Math.random() - 0.5);
    const bombs = new Array(howManyBombs);

    for (let i = 0; i < howManyBombs; i++) {
        bombs[i] = arr64Random[i];
        
    }

    const positions = Array(64).fill(0, 0);

    function bombsDetector(x) {
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


    for (let l = 0; l < bombs.length; l++){
        bombsDetector(bombs[l]);
    }

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

    for (let m = 0; m < bombs.length; m++){
        positions[bombs[m]] = `||${emoji}||`;
    }

    const spliceNumbers = Array(8)

    for (n = 0; n < 64; n++){
        if(Math.floor(n / 8) != Math.floor((n + 1) / 8)){
            spliceNumbers[Math.floor(n / 8)] = n;
        }
    }

    for (o = 8; o <= 64; o += 9) {
        const jumpLine = positions.splice(o, 0, "\n");
    }

    return {
        positions: positions.join``,
        howManyBombs
    };
}