import { cons } from 'hexlet-pairs';
import play from '..';

export const generatePair = () => {
  const varNumber1 = Math.ceil(Math.random() * 100);
  const varNumber2 = Math.ceil(Math.random() * 100);

  const smaller = varNumber1 > varNumber2 ? varNumber2 : varNumber1;
  const bigger = varNumber1 > varNumber2 ? varNumber1 : varNumber2;

  const iter = (num, counter) => {
    let newGcd = num;
    if (counter > smaller) {
      return num;
    }

    if (smaller % counter === 0 && bigger % counter === 0) {
      newGcd = counter;
    }

    const sum = counter + 1;
    return iter(newGcd, sum);
  };

  const gcd = iter(1, 1);

  const quetionText = `Question: ${varNumber1}  ${varNumber2} `;

  const correctAnswer = String(gcd);
  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'Find the greatest common divisor of given numbers.\n';
  play(getPair, rules);
};
