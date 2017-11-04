import { cons } from 'hexlet-pairs';
import play from '..';

const generatePair = () => {
  const varNumber = Math.ceil(Math.random() * 100);

  const getPrime = (number) => {
    if (number < 2) {
      return 'no';
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const correctAnswer = getPrime(varNumber);
  const quetionText = `Question: ${varNumber}`;

  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'Is it prime number?';
  play(getPair, rules);
};

