import { getUserName, letsPlay, congratulat,
  getUserAnswer } from '..';


export const generateGcdQuetion = (sumOfCorrectAnswer, name, game) => {
  if (sumOfCorrectAnswer === 3) {
    const con = congratulat(name);
    return con;
  }

  const varNumber1 = Math.ceil(Math.random() * 100);
  const gcd = Math.ceil(Math.random() * 5);

  const varNumber2 = varNumber1 * gcd;

  console.log(`Question: ${varNumber1}  ${varNumber2} `);

  const correctAnswer = gcd;

  const userAnswer = getUserAnswer();
  return letsPlay(userAnswer, correctAnswer, name, sumOfCorrectAnswer, game);
};


export default () => {
  const name = getUserName();
  const sumOfCorrectAnswer = 0;
  const game = 'gcd';
  generateGcdQuetion(sumOfCorrectAnswer, name, game);
};
