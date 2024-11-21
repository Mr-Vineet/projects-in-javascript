/* 
━ ╋ ┃

    ┃    ┃
━━━━╋━━━━╋━━━━
    ┃    ┃
━━━━╋━━━━╋━━━━
    ┃    ┃
*/
const CIRCLE = "⭕";
const CROSS = "❌";
const SPACES = "  ";

let pos1 = SPACES;
let pos2 = SPACES;
let pos3 = SPACES;
let pos4 = SPACES;
let pos5 = SPACES;
let pos6 = SPACES;
let pos7 = SPACES;
let pos8 = SPACES;
let pos9 = SPACES;

let movesDone = 0;

function getFrame() {
  console.log("\n");
  console.log("   a    b    c \n");
  console.log("1 " + pos1 + " ┃ " + pos4 + " ┃ " + pos7);
  console.log("  ━━━╋━━━━╋━━━━");
  console.log("2 " + pos2 + " ┃ " + pos5 + " ┃ " + pos8);
  console.log("  ━━━╋━━━━╋━━━━");
  console.log("3 " + pos3 + " ┃ " + pos6 + " ┃ " + pos9);
  console.log("\n\n");
}

function replaceGrid(userInput, userSign, player1, player2) {
  if (userInput === "a1" && pos1 === SPACES) {
    pos1 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "a2" && pos2 === SPACES) {
    pos2 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "a3" && pos3 === SPACES) {
    pos3 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "b1" && pos4 === SPACES) {
    pos4 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "b2" && pos5 === SPACES) {
    pos5 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "b3" && pos6 === SPACES) {
    pos6 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "c1" && pos7 === SPACES) {
    pos7 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "c2" && pos8 === SPACES) {
    pos8 = userSign;
    ++movesDone;
    return getFrame();
  }
  if (userInput === "c3" && pos9 === SPACES) {
    pos9 = userSign;
    ++movesDone;
    return getFrame();
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

function player2Input(player1, player2) {
  const player2Ip = prompt(player2 + " enter the place you want to put ❌ :");

  console.clear();
  replaceGrid(player2Ip, CROSS, player1, player2);

  const isPlayer2TheWinner = verifyWinningChances(CROSS);

  return isPlayer2TheWinner;
}

function player1Input(player1, player2) {
  const player1Ip = prompt(player1 + " enter the place you want to put ⭕ :");

  console.clear();
  replaceGrid(player1Ip, CIRCLE, player1, player2);
    
  const isPlayer1TheWinner = verifyWinningChances(CIRCLE);

  return isPlayer1TheWinner;
}

function startTheGame(player1, player2) {
  if (player1Input(player1, player2)) {
    return "🎉🎉 Congratulations!!! 🎉🎉 " + player1 + ", you have Won The Match 👑👑👑\n";
  }

  if (movesDone === 9) {
    return "👻👻👻 Oopps It's a Draw 😅😅\n";
  }

  if (player2Input(player1, player2)) {
    return "🎉🎉 Congratulations!!! 🎉🎉 " + player2 + ", you have Won The Match 👑👑👑\n";
  }

  return startTheGame(player1, player2);
}

const askToPlay = confirm("Would You Like To Play Tic Tac Toe❓❓❓");

if (askToPlay) {
  console.log("\nAlright!!! Let's Start Playing Tic Tac Toe 🥳🥳\n\n");

  const player1 = prompt("Enter Name For First Player : ");
  const player2 = prompt("Enter Name For Second Player: ");

  getFrame();

  console.log("[ a1 ] 👈🏻 Use This Format To Enter Positions Of Your Signs\n");
  console.log(startTheGame(player1, player2));
} else {
  console.log("\n🙏🙏 Thank You For Your Time... 🙏🙏\n ");
}
