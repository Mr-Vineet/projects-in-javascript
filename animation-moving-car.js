const background = [
  "                       .|                                                       .|                                ",
  "                       | |                                                      | |                               ",
  "                       |'|                               ",
  `               ___    |  |            |.   |' .---"|                    ___    |  |            |.   |' .---"|     `,
  "       _    .-'   '-. |  |     .--'|  ||   | _|    |            _    .-'   '-. |  |     .--'|  ||   | _|    |     ",
  "    .-'|  _.|  |    ||   '-__  |   |  |    ||      |         .-'|  _.|  |    ||   '-__  |   |  |    ||      |     ",
  "    |' | |.    |    ||       | |   |  |    ||      |         |' | |.    |    ||       | |   |  |    ||      |     ",
  `____|  '-'     '    ""       '-'   '-.'    ''      |_________|  '-'     '    ""       '-'   '-.'    ''      |_____`,
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
];

function drawBackground() {
  let backgroundFrame = "";

  for (let index = 0; index < background.length; index++) {
    backgroundFrame += background[index] + "\n";
  }

  return backgroundFrame;
}

const forwardMovingSegments = [
  "                                                                _________________________                            ",
  "                                      /\\       _____           |   |     |     |    | |  \\                           ",
  "      __               ,-----,       /  \\ ____/__|__\\ _        |___|_____|_____|____|_|___\\                          ",
  "   .-'--`-._        ,--'---:---`--, /  |  _     |     `|       |                    | |    \\                         ",
  "--'-O---O--'-------==(o)-----(o)==J---- `(o)-------(o)=--------`--(o)(o)--------------(o)--'-------------------------"
];

let line1 = "              ____                      _____________          _____________                                         ";
let line2 = "         ____//_]|________         ____//__][__][___|     ____//__][______||                                         ";
let line3 = "        (o _ |  -|   _  o|        (o  _|  -|     _ o|    (o _ |  -|   _   o|                                         ";
let line4 = "-------- `(_)-------(_)--' --------`-(_)--------(_)-'----`(_)-------(_)----'-----------------------------------------";

function getNewFrame(frame) {
  let newFrame = "";

  for (let index = 0; index < frame.length - 1; index++) {
    newFrame += frame[index];
  }

  return frame[frame.length - 1] + newFrame;
}

function getBackFrame(frame) {
  let newFrame = "";

  for (let index = 1; index < frame.length; index++) {
    newFrame += frame[index];
  }

  return newFrame + frame[0];
}

function motion() {
  for (let index = 0; index < 200; index++) {
    let forwardFrame = "";

    for (let index = 0; index < forwardMovingSegments.length; index++) {
      forwardMovingSegments[index] = getNewFrame(forwardMovingSegments[index]);
      forwardFrame += forwardMovingSegments[index] + "\n";
    }

    line1 = getBackFrame(line1);
    line2 = getBackFrame(line2);
    line3 = getBackFrame(line3);
    line4 = getBackFrame(line4);

    console.clear();
    console.log();
    console.log(drawBackground());

    const movingFrame = forwardFrame + "\n\n\n" + line1 + "\n" + line2 + "\n" + line3 + "\n" + line4;

    console.log(movingFrame);
    delay(20);
  }
}

motion();
