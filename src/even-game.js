import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let question = randomNum();
  console.log(`Question: ${question}`);
  let answer = readlineSync.question('Your answer: ');
  let trueCount = 0;
  for (let i = 0; i < 2; i += 1) {
    if (answer === 'yes' && question % 2 === 0) {
      console.log('Correct!');
      console.log(`Question: ${question = randomNum()}`);
      answer = readlineSync.question('Your answer: ');
      trueCount += 1
    } else if (answer === 'no' && question % 2 !== 0) {
      console.log('Correct!');
      console.log(`Question: ${question = randomNum()}`);
      answer = readlineSync.question('Your answer: ');
      trueCount += 1;
  } else if (answer === 'yes' && question % 2 !== 0) {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    trueCount -= 1
  }  else if (answer === 'no' && question % 2 === 0) {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    trueCount -= 1;
  };
};
trueCount === 2 ? console.log(`Correct!\nCongratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

const randomNum = () => {
  const random = Math.round(Math.random() * 100);
  return random;
};


