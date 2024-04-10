import readlineSync from 'readline-sync';

export default (explanation, coll) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(explanation);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = coll();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`);
    }
    console.log('Correct');
  }

  return console.log(`Congratulations, ${name}!`);
};
