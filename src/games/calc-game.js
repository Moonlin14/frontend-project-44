import run from '../index.js';
import getRandomNum from '../math.js';

const explanation = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = Math.round(Math.random() * (operators.length - 1));
  return operators[random];
};
const calculateAnswer = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return `${num1 + num2}`;
    case '-':
      return `${num1 - num2}`;
    case '*':
      return `${num1 * num2}`;
    default:
      return `Unknown operator : ${operator}`;
  }
};

const calc = () => {
  const operator = getRandomOperator();
  const num1 = getRandomNum(1, 30);
  const num2 = getRandomNum(1, 10);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateAnswer(operator, num1, num2);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, calc);
};
