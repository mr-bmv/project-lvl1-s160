import { cons } from 'hexlet-pairs';
import play from '..';

const generatePair = () => {
  const varNumber1 = Math.ceil(Math.random() * 10);
  const progressionNumber = Math.ceil(Math.random() * 5);

  let newNumber;
  const iter = (counter, progressionLine) => {
    if (counter === 10) {
      return progressionLine;
    }

    if (counter === 6) {
      newNumber = '..';
    } else {
      const counterForNumber = (counter - 1) * progressionNumber;
      newNumber = varNumber1 + counterForNumber;
    }

    const newLine = `${progressionLine}  ${newNumber}`;
    const newCounter = counter + 1;
    return iter(newCounter, newLine);
  };

  const line = iter(2, varNumber1);
  const progressionNumberRait = 5 * progressionNumber;
  const correctAnswer = String(varNumber1 + progressionNumberRait);

  const quetionText = `Question: ${line}`;

  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'What number is missing in this progression?\n';
  play(getPair, rules);
};

