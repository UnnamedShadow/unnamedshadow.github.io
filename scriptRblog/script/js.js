// tic tac toe in p5.js

// implementing basic functions that should be in the language
function repeat(item, n) {
  return Array(n).fill(item);
}
function unRef(item) {
  return JSON.parse(JSON.stringify(item));
}
function printLn(variable) {
  console.log(unRef(variable));
}
function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}

var grid = unRef(repeat(repeat(null, 3), 3));
printLn(grid);

function setup() {
  printLn(grid);
  // create canvas
  createCanvas(...repeat(min(windowWidth, windowHeight) * 0.9, 2));
  background(30);
  noFill();
  const cell = width / 3;
  printLn(grid);
  // draw grid
  stroke(255);
  strokeWeight(5);
  line(cell, 0, cell, height);
  line(cell * 2, 0, cell * 2, height);
  line(0, cell, width, cell);
  line(0, cell * 2, width, cell * 2);

  var player = true;
  printLn(grid);
  onmousedown = function () {
    printLn(grid);
    const x = floor(mouseX / cell);
    const y = floor(mouseY / cell);
    printLn(x, y);
    if (grid[x][y] !== null) {
      printLn("invalid move");
      return;
    }
    printLn(grid);
    grid[x][y] = player;
    printLn(grid);
    strokeWeight(10);

    if (player) {
      stroke(255, 0, 0);
      line(
        (x + 0.1) * cell,
        (y + 0.1) * cell,
        (x + 0.9) * cell,
        (y + 0.9) * cell
      );
      line(
        (x + 0.9) * cell,
        (y + 0.1) * cell,
        (x + 0.1) * cell,
        (y + 0.9) * cell
      );
    } else {
      stroke(0, 255, 0);
      ellipse((x + 0.5) * cell, (y + 0.5) * cell, cell * 0.8, cell * 0.8);
    }
    player = !player;
    checkWin();
  };
}

function checkWin() {
  const tempGrid = grid.map((row) =>
    row.map((cell) => (cell === null ? 0 : cell ? 1 : -1))
  );
  printLn(tempGrid);
  const sums = [
    sum(tempGrid[0]),
    sum(tempGrid[1]),
    sum(tempGrid[2]),
    sum(tempGrid.map((row) => row[0])),
    sum(tempGrid.map((row) => row[1])),
    sum(tempGrid.map((row) => row[2])),
    sum(tempGrid.map((row, i) => row[i])),
    sum(tempGrid.map((row, i) => row[2 - i])),
  ];
  printLn(sums);
  sums.forEach((element) => {
    if (abs(element) === 3) {
      alert((element > 0 ? "X" : "O") + " wins!");
      return;
    }
  });
}
