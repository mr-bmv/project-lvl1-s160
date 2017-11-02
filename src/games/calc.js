import { getUserName, letsPlay, congratulat,
  getUserAnswer } from '..';


export const generateCalcQuetion = (sumOfCorrectAnswer, name, game) => {
  if (sumOfCorrectAnswer === 3) {
    const con = congratulat(name);
    return con;
  }

  const varNumber1 = Math.ceil(Math.random() * 10);
  const varNumber2 = Math.ceil(Math.random() * 10);

  const creatSymbol = () => { // получаем рандомный символ + - *
    const symbol = Math.ceil(Math.random() * 3);
    if (symbol === 1) {
      return '+';
    } else if (symbol === 2) {
      return '*';
    }
    return '-';
  };

  const symbol = creatSymbol();

  let correctAnswer = 0;

  switch (symbol) {
    case '+':
      console.log(`Question: ${varNumber1}${symbol}${varNumber2}`);
      correctAnswer = varNumber1 + varNumber2;
      break;
    case '-':
      console.log(`Question: ${varNumber1}${symbol}${varNumber2}`);
      correctAnswer = varNumber1 - varNumber2;
      break;
    case '*':
      console.log(`Question: ${varNumber1}${symbol}${varNumber2}`);
      correctAnswer = varNumber1 * varNumber2;
      break;
    default:
      console.log(`Question: ${varNumber1}${symbol}${varNumber2}`);
      correctAnswer = varNumber1 + varNumber2;
  }

  const userAnswer = getUserAnswer();
  return letsPlay(userAnswer, correctAnswer, name, sumOfCorrectAnswer, game);
};

export default () => {
  const name = getUserName();
  const sumOfCorrectAnswer = 0;
  const game = 'calc';
  generateCalcQuetion(sumOfCorrectAnswer, name, game);
};
