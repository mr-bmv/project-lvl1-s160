import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getUserAnswer = () => {
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const showCorret = () => {
  console.log('Correct!!!');
};

const showWrong = (yourAnswer, userName, correctAnswer) => {
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was
    '${correctAnswer}'. Let's try again, ${userName}!`);
};

export default (getPair, rules) => { // stable structure body of game
  console.log('Welcome to Brain Games!');
  console.log(rules);
  const userName = getUserName();

  const iter = (sumOfCorrectAnswer) => {
    if (sumOfCorrectAnswer === 3) {
      return congratulate(userName);
    }

    const pairForGame = getPair(); // it's pair for every new loop

    const quetionText = car(pairForGame);
    console.log(quetionText);
    const correctAnswer = cdr(pairForGame);

    const userAnswer = getUserAnswer();

    if (correctAnswer === userAnswer) {
      showCorret();
      const sum = sumOfCorrectAnswer + 1;
      return iter(sum);
    }

    return showWrong(userAnswer, userName, correctAnswer);
  };
  return iter(0);
};
