import run from '../index.js';

const explanation = 'What number is missing in the progression?';

const randomNum = (num) => {
  const random = Math.round(Math.random() * num);
  return random;
};