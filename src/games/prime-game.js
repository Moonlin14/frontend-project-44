import run from '../index.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNum = (num) => {
  const random = Math.round(Math.random() * num);
  return random;
};

const primeCheck = (num) => {
  const primeNum = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
  for (const count of primeNum) {
    if (num === count) {
      return 'yes';
    }
  }
  return 'no';
};

const prime = () => {
  const num = randomNum(50);
  const question = `${num}`;
  const correctAnswer = primeCheck(num);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, prime);
};
