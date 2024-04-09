import run from './index.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNum = () => {
  const random = Math.round(Math.random() * 100);
  return random;
};

const even = () => {
  const number = randomNum();
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(explanation, even);
};
