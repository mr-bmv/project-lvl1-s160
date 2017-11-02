import { getUserName, letsPlay, congratulat,
  getUserAnswer } from '..';

export const generateEvenQuetion = (sumOfCorrectAnswer, name, game) => {
  if (sumOfCorrectAnswer === 3) {
    const con = congratulat(name);
    return con;
  }

  const varNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${varNumber}`);

  const correctAnswer = varNumber % 2 === 0 ? 'yes' : 'no';

  const userAnswer = getUserAnswer();
  return letsPlay(userAnswer, correctAnswer, name, sumOfCorrectAnswer, game);
};

export default () => {
  const name = getUserName();
  const sumOfCorrectAnswer = 0;
  const game = 'even';
  generateEvenQuetion(sumOfCorrectAnswer, name, game);
};
