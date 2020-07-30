const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    if (horizontalJoin.includes(word) || verticalJoin.includes(word)) {
        return true;
    } else {
        return false
    }
}


const transpose = (letters) => {
    const rows = letters.length;
    const cols = letters[0].length;
    const grid = [];

    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = letters[i][j];
        }
    }
    return grid;
};

module.exports = wordSearch;