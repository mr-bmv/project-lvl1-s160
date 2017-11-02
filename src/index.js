import readlineSync from 'readline-sync';
import { generateCalcQuetion } from './games/calc';
import { generateEvenQuetion } from './games/even';

export const getUserName = () => { // узнаем имя
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getUserAnswer = () => { // получаем ответ юзера
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

export const congratulat = (name) => { // поздравляем юзера
  console.log(`Congratulations, ${name}!`);
};

const showCorret = () => { // вывод ПРАВИЛЬНОГО ответа
  console.log('Correct!!!');
};

const showWrong = (yourAnswer, name, correct) => { // вывод НЕПРАВИЛЬНОГО ответа
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was
    '${correct}'. Let's try again, ${name}!`);
};

export const letsPlay = (userAnswer, correctAnswer, name, sum, game) => {
  let sumOfCorrectAnswer = sum;
  while (sumOfCorrectAnswer < 3) {
    if (correctAnswer == userAnswer && game === 'calc') {
      showCorret();
      sumOfCorrectAnswer += 1;
      return generateCalcQuetion(sumOfCorrectAnswer, name, game);
    }
    if (correctAnswer == userAnswer && game === 'even') {
      showCorret();
      sumOfCorrectAnswer += 1;
      return generateEvenQuetion(sumOfCorrectAnswer, name, game);
    }

    return showWrong(userAnswer, name, correctAnswer);
  }
};
