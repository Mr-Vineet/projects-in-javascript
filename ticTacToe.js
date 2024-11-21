/* 
━ ╋ ┃

    ┃    ┃
━━━━╋━━━━╋━━━━
    ┃    ┃
━━━━╋━━━━╋━━━━
    ┃    ┃
*/
//solve for draw case.
//solve for getting the output of winning twice.
//issue : even after winning it ask for one more time to give input sometimes.

const CIRCLE = "⭕";
const CROSS = "❌";
const SPACES = "  ";

let pos1 = "  ";
let pos2 = "  ";
let pos3 = "  ";
let pos4 = "  ";
let pos5 = "  ";
let pos6 = "  ";
let pos7 = "  ";
let pos8 = "  ";
let pos9 = "  ";

let movesDone = 0;

function getFrame() {
  console.log("\n");
  console.log("   a    b    c \n");//each block size is 3.
  console.log("1 " + pos1 + " ┃ " + pos4 + " ┃ " + pos7);
  console.log("  ━━━╋━━━━╋━━━━");
  console.log("2 " + pos2 + " ┃ " + pos5 + " ┃ " + pos8);
  console.log("  ━━━╋━━━━╋━━━━");
  console.log("3 " + pos3 + " ┃ " + pos6 + " ┃ " + pos9);
  console.log("\n\n");
}

function replaceGrid(userInput, userSign, player1, player2) {
  switch (userInput) { // change to if blocks
    case "a1":
      if (pos1 === SPACES) {
        pos1 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "a2":
      if (pos2 === SPACES) {
        pos2 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "a3":
      if (pos3 === SPACES) {
        pos3 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "b1":
      if (pos4 === SPACES) {
        pos4 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "b2":
      if (pos5 === SPACES) {
        pos5 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "b3":
      if (pos6 === SPACES) {
        pos6 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "c1":
      if (pos7 === SPACES) {
        pos7 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "c2":
      if (pos8 === SPACES) {
        pos8 = userSign;
        movesDone + 1;
        return getFrame();
      }
      break;
    case "c3":
      if (pos9 === SPACES) {
        pos9 = userSign;
        movesDone + 1;
        return getFrame();
      }
  }

  getFrame();
  console.log("Invalid Input!!!😱😱😱 Enter Valid Position\n");

  return userSign === CIRCLE
    ? player1Input(player1, player2) : player2Input(player1, player2);
}

function verifyWinningChances(userSign) {//find a pattern in it
  if (pos1 === userSign && pos4 === userSign && pos7 === userSign) {
    return true;
  }

  if (pos2 === userSign && pos5 === userSign && pos8 === userSign) {
    return true;
  }

  if (pos3 === userSign && pos6 === userSign && pos9 === userSign) {
    return true;
  }

  if (pos1 === userSign && pos2 === userSign && pos3 === userSign) {
    return true;
  }

  if (pos4 === userSign && pos5 === userSign && pos6 === userSign) {
    return true;
  }

  if (pos7 === userSign && pos8 === userSign && pos9 === userSign) {
    return true;
  }

  if (pos1 === userSign && pos5 === userSign && pos9 === userSign) {
    return true;
  }

  if (userSign === pos3 && userSign === pos5 && userSign === pos7) {
    return true;
  }
}

function messageForWinner(playerName) {

}

function player2Input(player1, player2) {
  if (movesDone > 9) {
    console.log("OOPs It's a Draw ");
    return;
  }

  const player2Ip = prompt(player2 + " enter the place you want to put ❌ :");

  console.clear();
  replaceGrid(player2Ip, CROSS, player1, player2);

  const isPlayer2TheWinner = verifyWinningChances(CROSS);

  if (isPlayer2TheWinner) {
    console.log("🎉🎉 Congratulations!!! 🎉🎉,", player2, "you have Won The Match 👑👑👑\n");

    return isPlayer2TheWinner;
  }

  player1Input(player1, player2);
}

function player1Input(player1, player2) {
  if (movesDone > 9) {
    console.log("OOPs It's a Draw ");
    return;
  }

  const player1Ip = prompt(player1 + " enter the place you want to put ⭕ :");

  console.clear();
  replaceGrid(player1Ip, CIRCLE, player1, player2);

  const isPlayer1TheWinner = verifyWinningChances(CIRCLE);

  if (isPlayer1TheWinner) {
    console.log("🎉🎉 Congratulations!!! 🎉🎉,", player1, "you have Won The Match 👑👑👑\n");

    return isPlayer1TheWinner;
  }

  player2Input(player1, player2);
}

function startTheGame() {

}

const askToPlay = confirm("Would You Like To Play Tic Tac Toe❓❓❓");

if (askToPlay) {
  console.log("\nAlright!!! Let's Start Playing Tic Tac Toe 🥳🥳\n\n");

  const player1 = prompt("Enter Name For First Player : ");
  const player2 = prompt("Enter Name For Second Player: ");

  getFrame();

  console.log("[ a1 ] 👈🏻 Use This Format To Enter Positions Of Your Signs\n");
  // startTheGame(player1, player2);
  player1Input(player1, player2);
} else {
  console.log("\n🙏🙏 Thank You For Your Time... 🙏🙏\n ");
}
