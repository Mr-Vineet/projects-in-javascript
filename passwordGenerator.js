const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "!@#$&*_";

function getRandomNumber(from, to) {
  const randomNumber = Math.floor(Math.random() * (to - from) + from);
  return randomNumber;
}

function drawRandomChar(string) {
  const randomIndex = getRandomNumber(0, string.length);

  return string[randomIndex];
}

function getRandomChar(randomAskOfChar) {
  switch (randomAskOfChar) {
    case 0:
      return drawRandomChar(smallAlphabets);
    case 1:
      return drawRandomChar(capitalAlphabets);
    case 2:
      return drawRandomChar(specialChar);
    case 3:
      return getRandomNumber(0, 9);
  }
}

function instructions() {
  const welcomeMessage = "\n\t\t***** Welcome to Password Generator ***** \n";
  const disclaimer = "\nPlease Enter Length In Integers Only \n";

  return welcomeMessage + disclaimer;
}

function takeUserInput() {
  const passLength = +prompt("\nPlease Enter The Length of Password : ");

  if (passLength < 1 || isNaN(passLength)) {
    console.clear();
    console.log("\nPlease Enter Valid Length In Numbers !!!\n");

    return takeUserInput();
  }

  return passLength;
}

function createPassword() {
  const passLength = takeUserInput();

  let generatedPassword = "";

  for (let index = 0; index < passLength; index++) {
    generatedPassword += getRandomChar(getRandomNumber(0, 4));

  }

  return "\nYour generated Password is : " + generatedPassword + "\n";
}

function askForAnotherPassword() {
  console.log(createPassword());

  if (confirm("Would you like to get another password ❓❓❓")) {
    askForAnotherPassword();
  }

  return "\n🙏🏻🙏🏻🙏🏻 Thank you!!! for visiting us 🙏🏻🙏🏻🙏🏻\n";
}

console.log(instructions());
console.log(askForAnotherPassword());
