import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const number = getRandomNum(1, 100);
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(explanation, even);
};
