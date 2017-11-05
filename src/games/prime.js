import { cons } from 'hexlet-pairs';
import play from '..';

const generatePair = () => {
  const varNumber = Math.ceil(Math.random() * 100);

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const correctAnswer = isPrime(varNumber) ? 'yes' : 'no';

  return cons(varNumber, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'Is it prime number?';
  play(getPair, rules);
};

