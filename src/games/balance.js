import { cons } from 'hexlet-pairs';
import play from '..';

const generatePair = () => {
  const varNumber = Math.ceil(Math.random() * 1000);
  const varNumberStr = String(varNumber);
  const varNumberArray = varNumberStr.split('').map(digit => Number(digit));
  const lengthOfNum = varNumberStr.length;

  const getBalance = (arr) => {
    const newArr = arr.slice().sort();
    const diff = newArr[lengthOfNum - 1] - newArr[0];
    if (diff > 1) {
      newArr[lengthOfNum - 1] -= 1;
      newArr[0] += 1;
    } else {
      return newArr;
    }
    return getBalance(newArr);
  };

  const balanceArray = getBalance(varNumberArray);
  const correctAnswer = balanceArray.join('');

  const quetionText = `Question: ${varNumber}`;

  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'Balance the given number.\n';
  play(getPair, rules);
};

