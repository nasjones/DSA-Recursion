function mazeSolver(maze, x, y, xlim, ylim) {
    xlim = maze.length
    ylim = maze[0].length
    x = x || 0
    y = y || 0

    if ((y + 1 < ylim) && (maze[x][y + 1] == 'e'))
        return "R"
    if ((x + 1 < xlim) && (maze[x + 1][y] == 'e'))
        return "D"
    if ((y - 1 >= 0) && (maze[x][y - 1] == 'e'))
        return "L"
    if ((x - 1 >= 0) && (maze[x - 1][y] == 'e'))
        return "U"
    if ((y + 1 < ylim) && (maze[x][y + 1] == ' '))
        return "R" + mazeSolver(maze, x, y + 1)
    if ((x + 1 < xlim) && (maze[x + 1][y] == ' '))
        return "D" + mazeSolver(maze, x + 1, y)
    if ((y - 1 >= 0) && (maze[x][y - 1] == ' '))
        return "L" + mazeSolver(maze, x, y - 1)
    if ((x - 1 >= 0) && (maze[x - 1][y] == ' '))
        return "U" + mazeSolver(maze, x - 1, y)

}


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeSolver(mySmallMaze))
console.log(mazeSolver(maze))