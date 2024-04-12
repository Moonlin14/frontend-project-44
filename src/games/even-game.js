import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  const number = getRandomNum(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, even);
};
