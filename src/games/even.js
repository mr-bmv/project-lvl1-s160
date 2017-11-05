import { cons } from 'hexlet-pairs';
import play from '..';

export const generatePair = () => {
  const varNumber = Math.ceil(Math.random() * 100);

  const correctAnswer = varNumber % 2 === 0 ? 'yes' : 'no';
  return cons(varNumber, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  play(getPair, rules);
};
