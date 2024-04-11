import run from '../index.js';

const explanation = 'Find the greatest common divisor of given numbers.';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lowestDivision = (num1, num2) => {
  const coll1 = [];
  const coll2 = [];
  let correctAnswer;

  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0) {
      coll1.push(i);
    }
  }

  for (let i = 1; i <= num2; i += 1) {
    if (num2 % i === 0) {
      coll2.push(i);
    }
  }

  for (let i = coll1.length - 1; i >= 0; i -= 1) {
    if (coll2.includes(coll1[i])) {
      correctAnswer = coll1[i];
      break;
    }
  }

  return correctAnswer;
};

const gcd = () => {
  const num1 = randomNum(1, 30);
  const num2 = randomNum(1, 30);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${lowestDivision(num1, num2)}`;
  return [question, correctAnswer];
};

export default () => {
  run(explanation, gcd);
};
