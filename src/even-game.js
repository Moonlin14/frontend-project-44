import readlineSync from 'readline-sync';

const randomNum = () => {
  const random = Math.round(Math.random() * 100);
  return random;
};

export default () => {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let question = randomNum();
  let trueCount = 0;
  do {
    console.log(`Question: ${question = randomNum()}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && question % 2 === 0) {
      console.log('Correct!');
      trueCount += 1;
    } else if (answer === 'no' && question % 2 !== 0) {
      console.log('Correct!');
      trueCount += 1;
    } else if (answer === 'yes' && question % 2 !== 0) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    } else if (answer === 'no' && question % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
    }
  } while (trueCount < 3);
  return console.log(`Congratulations, ${name}!`);
};
