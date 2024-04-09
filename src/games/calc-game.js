import run from '../index.js';

const explanation = 'What is the result of the expression?';

const randomNum = (num) => {
  const random = Math.round(Math.random() * num);
  return random;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = Math.round(Math.random() * 2);
  return operators[random];
};
const calcAnswer = (operator, num1, num2) => {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return undefined;
  }
  return `${result}`;
};

const calc = () => {
  const operator = randomOperator();
  const num1 = randomNum(70);
  const num2 = randomNum(10);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calcAnswer(operator, num1, num2);
  return [question, correctAnswer];
};

export default () => {
  run(explanation, calc);
};
