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
  return matrix.map((row, rowIndex) => row.map((_, columnIndex) => {
    let mineCount = 0;

    for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
      for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
        const neighborRow = rowIndex + rowOffset;
        const neighborColumn = columnIndex + columnOffset;
        if (
          (rowOffset !== 0 || columnOffset !== 0)
          && matrix[neighborRow]?.[neighborColumn] === true
        ) {
          mineCount += 1;
        }
      }
    }

    return mineCount;
  }));
}

module.exports = {
  minesweeper
};
