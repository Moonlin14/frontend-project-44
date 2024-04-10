import run from '../index.js';

const explanation = 'Find the greatest common divisor of given numbers.';

const randomNum = (num) => {
  const random = Math.round(Math.random() * num);
  return random;
};

const lowestDivision = (num1, num2) => {
  const coll1 = [];
  const coll2 = [];
  const coll3 = [];

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

  for (const value1 of coll1) {
    for (const value2 of coll2) {
      if (value1 === value2) {
        coll3.push(value1);
      };
    };
  };

  return coll3[coll3.length - 1];
};

const gcd = () => {
  const num1 = randomNum(30);
  const num2 = randomNum(30);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${lowestDivision(num1, num2)}`;
  return [question, correctAnswer];
};

export default () => {
  run(explanation, gcd);
};
