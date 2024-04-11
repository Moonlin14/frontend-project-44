import run from '../index.js';

const explanation = 'What number is missing in the progression?';

const randomNum = (num) => {
  const random = Math.round(Math.random() * num);
  return random;
};

const randomColl = () => {
  const coll = [];
  const num1 = randomNum(100);
  const num2 = randomNum(5);
  const space = randomNum(9);
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
  const question = `${coll}`;
  return [question, correctAnswer];
};

export default () => {
  run(explanation, progression);
};
