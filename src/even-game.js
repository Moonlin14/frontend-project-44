import readlineSync from 'readline-sync';

export default () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let question = randomNum();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const isTrue = (question % 2 === 0 && answer === 'yes') || (question % 2 !== 0 && answer === 'no') ? true : false;
  let truecount = 3;
  if (truecount === 3) {
    return `Congratulations, ${name}`;
  };
};

const randomNum = () => {
  const randomNum = Math.round(Math.random() * 100);
  return randomNum;
};

const greeting = () => {
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  return name
};