import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  return primeNum.includes(num) ? 'yes' : 'no';
};

const runPrimeGame = () => {
  const num = getRandomNum(1, 50);
  const question = `${num}`;
  const correctAnswer = isPrime(num);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, runPrimeGame);
};
