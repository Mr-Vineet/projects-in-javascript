
function startQuiz() {
  const participantName = prompt("\nPlease enter your name 🤗\n");
  const truthOrDare1 =
    confirm("\nFirst Question!!!\nHave you ever stolen chocolate? 😋");

  if (truthOrDare1) {
    console.log("\nCongrats!!!, you are a thief🤫 ;");
    console.log("now stand on your chair!!!🤪\n");
  } else {
    console.log("\nYou are a good person,\nKeep it up !!!👏\n");
  }

  const truthOrDare2 =
    confirm("\nNext Question!!\nHave you ever eaten in your classes?👀\n");

  if (truthOrDare2) {
    console.log("\nCongrats!!!🥳, you are a foodie ;)\nlet's eat sometime!!!\n");
  } else {
    console.log("\nYou are a nice person🫶 \nNow give me some treat!!!");
  }

  const truthOrDare3 =
    confirm("\nNext Question!!\nDid you ever think that I am rude?😅");

  if (truthOrDare3) {
    console.log("\nOhhhhh!!!😱, Good News... I am not!!!🤗\n");

    const askForFriendship = confirm("\nlet's be friends now 🤭");

    if (askForFriendship) {
      console.log("\n Thanks for becoming my buddy🤝\n");
    } else {
      console.log("\nYou are a kind person🗿 \nThanks for playing 👻!!!\n");
    }
  }

  prompt(" ******-------------- Thanks For Playing -------------****** ");
  getFeedback(participantName);
}

function getStar(numberFoStar) {
  if (numberFoStar === 5) {
    return "5.🌟🌟🌟🌟🌟 --> Amazing";
  }

  if (numberFoStar === 4) {
    return "4.🌟🌟🌟🌟 --> I liked it";
  }

  if (numberFoStar === 3) {
    return "3.🌟🌟🌟 --> Very Good";
  }

  if (numberFoStar === 2) {
    return "2.🌟🌟 --> Good";
  }

  return "1.🌟 --> Not Bad";
}

function getFeedback(participantName) {
  console.clear();

  let ratingCriteria = "🙏🙏 You Can Rate The Game Out Of 5 🙏🙏\n\n";
  ratingCriteria += "5.🌟🌟🌟🌟🌟 --> Amazing\n\n4.🌟🌟🌟🌟 --> I liked it\n\n";
  ratingCriteria += "3.🌟🌟🌟 --> Very Good\n\n2.🌟🌟 --> Good\n\n";
  ratingCriteria += "1.🌟 --> Not Bad\n\n";

  console.log(ratingCriteria);

  const starRating = +prompt("\nRate the game out of 5:");
  const review = prompt("\nplease give us feedback about this game:👻\n");

  console.log("\nThank you!!! " + participantName + " for the feedback🫡\n");
  console.log(getStar(starRating));
  console.log(review);
}

const askToPlay = confirm("Wanna play Quiz with me❓❓❓");

if (askToPlay) {
  startQuiz();
} else {
  console.log("🙏🙏Thank You For Your Time...🙏🙏");
}
