var currentPlayer = "O";

// var board1 = [
//   [document.getElementById("11"), document.getElementById("12"), document.getElementById("13")],
//   [document.getElementById("21"), document.getElementById("22"), document.getElementById("23")],
//   [document.getElementById("31"), document.getElementById("32"), document.getElementById("33")]
// ];

var board = [["", "", ""], ["", "", ""], ["", "", ""]];

var x = 0;
var y = 0;
for (x = 0; x < 3; x++) {
  for (y = 0; y < 3; y++) {
    board[x][y] = document.getElementById(`${x + 1}${y + 1}`);
  }
}

function checkCol(col) {
  var x = 0;
  for (x = 0; x < 3; x++) {
    if (board[x][col].innerText != currentPlayer) {
      return false;
    }
  }
  return true;
}

function checkRow(row) {
  var x = 0;
  for (x = 0; x < 3; x++) {
    if (board[row][x].innerText != currentPlayer) {
      return false;
    }
  }
  return true;
}

function checkDia() {
  var dia1 = board[0][0].innerHTML === currentPlayer && board[1][1].innerHTML === currentPlayer && board[2][2].innerHTML === currentPlayer;
  var dia2 = board[0][2].innerHTML === currentPlayer && board[1][1].innerHTML === currentPlayer && board[2][0].innerHTML === currentPlayer;
  return dia1 || dia2;
}

function checkWin() {
  var i = 0;
  for (i = 0; i < 3; i++) {
    if (checkCol(i) || checkRow(i)) {
      return true;
    }
  }
  return checkDia();
}

function turn() {
  if (event.target.innerText === "") {
    event.target.innerText = currentPlayer;
    if (checkWin()) {
      document.body.innerHTML = `<center id="winner">${currentPlayer} wins!</center>`;
    }
    else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
  else {
    alert("There's already a play here.")
  }
}

// when the game is a draw
