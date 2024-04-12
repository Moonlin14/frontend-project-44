import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'What number is missing in the progression?';

const randomColl = () => {
  const coll = [];
  const num1 = getRandomNum(1, 30);
  const num2 = getRandomNum(1, 5);
  const space = getRandomNum(1, 9);
  for (let i = num2; i < num2 * 11; i += num2) {
    coll.push(num1 + i);
  }
  const correctAnswer = coll[space];
  coll[space] = '..';
  return [correctAnswer, coll.join(' ')];
};

const progression = () => {
  const [answer, coll] = randomColl();
  const correctAnswer = `${answer}`;
  const question = coll;
  return [question, correctAnswer];
};

export default () => {
  run(explanation, progression);
};
