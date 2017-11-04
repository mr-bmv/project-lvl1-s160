import { cons } from 'hexlet-pairs';
import play from '..';

export const generatePair = () => { // generate pair of question/correct answer
  const varNumber1 = Math.ceil(Math.random() * 10);
  const varNumber2 = Math.ceil(Math.random() * 10);

  const creatSymbol = () => { // generate symbol + - *
    const symbol = Math.ceil(Math.random() * 3);
    if (symbol === 1) {
      return '+';
    } else if (symbol === 2) {
      return '*';
    }
    return '-';
  };

  const symbol = creatSymbol();
  const quetionText = `Question: ${varNumber1}${symbol}${varNumber2}`;
  let correctAnswer;

  switch (symbol) {
    case '-':
      correctAnswer = String(varNumber1 - varNumber2);
      break;
    case '*':
      correctAnswer = String(varNumber1 * varNumber2);
      break;
    default:
      correctAnswer = String(varNumber1 + varNumber2);
  }

  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'What is the result of the expression?\n';
  play(getPair, rules);
};
