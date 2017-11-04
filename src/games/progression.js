import { cons } from 'hexlet-pairs';
import play from '..';

const generatePair = () => {
  const varNumber1 = Math.ceil(Math.random() * 10);
  const progressionNumber = Math.ceil(Math.random() * 5);
  const hideNumber = Math.ceil(Math.random() * 10);

  let newNumber;
  const iter = (progressionLine, counter) => {
    if (counter === 10) {
      return progressionLine;
    }

    if (counter === hideNumber) {
      newNumber = '..';
    } else {
      const counterForNumber = (counter - 1) * progressionNumber;
      newNumber = varNumber1 + counterForNumber;
    }

    const newLine = `${progressionLine}  ${newNumber}`;
    const newCounter = counter + 1;
    return iter(newLine, newCounter);
  };

  const line = iter(varNumber1, 2);
  const progressionNumberRait = (hideNumber - 1) * progressionNumber;
  const correctAnswer = String(varNumber1 + progressionNumberRait);

  const quetionText = `Question: ${line}`;

  return cons(quetionText, correctAnswer);
};

export default () => {
  const getPair = () => generatePair();
  const rules = 'What number is missing in this progression?';
  play(getPair, rules);
};

