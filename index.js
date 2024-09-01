function lifeInWeeks(age) {
  /************Don't change the code above************/
  const userAge = Number(age);
  const ageLimit = 90;

  if (userAge === ageLimit) {
    console.log("Don't stress me, You will die very soon.");
  } else if (userAge < ageLimit && userAge >= 0) {
    const yearsLeft = ageLimit - userAge;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
    console.log(
      `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
    );
  } else if (userAge < 0) {
    console.log("You should not even be alive yet. How did you get a browser?");
  } else if (userAge > ageLimit) {
    console.log("You should be dead by now. What are you still doing with us?");
  } else {
    console.log(
      "You should be wise enough to know your age must be a number, not containing letters"
    );
  }

  /*************Don't change the code below**********/
}
//lifeInWeeks('-age')

//Love Calculator
function getLoveMatch(loverBoy, loverGirl) {
  const loveMatch = Math.floor(Math.random() * 100) + 1;
  console.log(`${loverBoy} and ${loverGirl} are ${loveMatch}% match!!`);
}
getLoveMatch("John", "Mary");
