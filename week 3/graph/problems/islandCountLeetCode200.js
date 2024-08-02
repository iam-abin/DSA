const numberOflands = function (grid) {
    let islandCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            // Check if it is an island
            if (grid[i][j] === "1") {
                islandCount++;
                dfs(i, j, grid);
            }
        }
    }
    return islandCount;
};

//
const dfs = (rowIndex, colIndex, grid) => {
    if (
        grid[rowIndex] === undefined || // if rowIndex is -1 or grid.length
        grid[rowIndex][colIndex] === undefined || // if rowIndex = -1 or grid.length,  colIndex = -1 or grid[colIndex].length
        grid[rowIndex][colIndex] === "0"
    )
        return;

    grid[rowIndex][colIndex] = "0";
    dfs(rowIndex + 1, colIndex, grid);
    dfs(rowIndex - 1, colIndex, grid);
    dfs(rowIndex, colIndex + 1, grid);
    dfs(rowIndex, colIndex - 1, grid);
};

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];

console.log(numberOflands(grid1)); // 1
console.log(numberOflands(grid2)); // 3
// console.log(numberOflands(grid));
