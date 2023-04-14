const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let answer = [].concat(matrix);

    matrix.unshift(Array(matrix[0].length).fill(false));
    matrix.push(Array(matrix[0].length).fill(false));
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [false].concat(matrix[i]).concat([false]);
    }

    for (let i = 1; i <= answer[0].length; i++) {
        for (let j = 1; j <= answer.length; j++) {
            let counter = 0;
            for (let a = -1; a < 2; a++) {
                for (let b = -1; b < 2; b++) {
                    if (matrix[j + a][i + b] == true) {
                        counter++;
                    }
                }
            }
            answer[j - 1][i - 1] == true ? (answer[j - 1][i - 1] = counter - 1) : (answer[j - 1][i - 1] = counter);
        }
    }

    return answer;
}

module.exports = {
    minesweeper,
};
