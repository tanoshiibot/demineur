module.exports = function generateMinesweeper(howManyBombs, emoji) {
    const arr64 = [...Array(64).keys()];

    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

    randomize(arr64);
    
    const bombs = [...Array(howManyBombs)].map((x, i) => arr64[i]);
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


    for (let i = 0; i < bombs.length; i++){
        bombsDetector(bombs[i]);
    }

    function numberString(y , z){
        if (y === 0) {
            positions[z] = "||:zero:||";
        } else if (y == 1) {
            positions[z] = "||:one:||";
        } else if (y == 2){
            positions[z] = "||:two:||";
        } else if (y == 3){
            positions[z] = "||:three:||";
        } else if (y == 4){
            positions[z] = "||:four:||";
        } else if (y == 5){
            positions[z] = "||:five:||";
        } else if (y == 6){
            positions[z] = "||:six:||";
        } else if (y == 7){
            positions[z] = "||:seven:||";
        } else if (y == 8){
            positions[z] = "||:eight:||";
        }
    }

    for (let i = 0; i < positions.length; i++){
        numberString(positions[i] , i);
    }

    for (let i = 0; i < bombs.length; i++){
        positions[bombs[i]] = `||${emoji}||`;
    }

    for (let i = 8; i <= 64; i += 9) {
        positions.splice(i, 0, "\n");
    }

    return {
        positions: positions.join``,
        howManyBombs
    };
}
