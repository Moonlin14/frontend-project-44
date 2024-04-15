import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const runPrimeGame = () => {
  const num = getRandomNum(1, 50);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(explanation, runPrimeGame);
};
