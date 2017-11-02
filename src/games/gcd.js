import { cons } from 'hexlet-pairs';
import play from '..';

export const generatePair = () => {
  const varNumber1 = Math.ceil(Math.random() * 100);
  const gcd = Math.ceil(Math.random() * 5);

  const varNumber2 = varNumber1 * gcd;

  const quetionText = `Question: ${varNumber1}  ${varNumber2} `;

  const correctAnswer = String(gcd);
  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const createRules = () => 'Find the greatest common divisor of given numbers.\n';
  play(getPair, createRules);
};
