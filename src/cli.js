import readlineSync from 'readline-sync'

const name = readlineSync.question('May i have your name? ');
export default () => {
console.log(`Hello, ${name}!`);
};
