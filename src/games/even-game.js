import run from '../index.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const even = () => {
  const number = randomNum(1, 100);
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(explanation, even);
};
