import run from '../index.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const primeCheck = (num) => {
  const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  return primeNum.includes(num) ? 'yes' : 'no';
};

const prime = () => {
  const num = randomNum(1, 50);
  const question = `${num}`;
  const correctAnswer = primeCheck(num);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, prime);
};
