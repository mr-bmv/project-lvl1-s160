import { cons } from 'hexlet-pairs';
import play from '..';

export const generatePair = () => {
  const varNumber = Math.ceil(Math.random() * 100);
  const quetionText = `Question: ${varNumber}`;

  const correctAnswer = varNumber % 2 === 0 ? 'yes' : 'no';
  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const createRules = () => 'Answer "yes" if number even otherwise answer "no".\n';
  play(getPair, createRules);
};
