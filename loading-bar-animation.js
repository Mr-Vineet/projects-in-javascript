const dot = "▉";
const lineBreak = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
const tabSpace = "\t\t\t\t\t\t";

function delay(times) {
  for (let index = 0; index < 10000000 * times; index++);
}

for (let i = 0; i < 3; i++) {
  let loadingString = lineBreak + tabSpace + "LOADING";

  for (let index = 0; index < 5; index++) {
    delay(100);
    console.clear();
    loadingString += dot;
    
    console.log(loadingString);
  }
}
