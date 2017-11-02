import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getUserName = () => { // узнаем имя
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getUserAnswer = () => { // получаем ответ юзера
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

export const congratulate = (name) => { // поздравляем юзера
  console.log(`Congratulations, ${name}!`);
};

const showCorret = () => { // вывод ПРАВИЛЬНОГО ответа
  console.log('Correct!!!');
};

const showWrong = (yourAnswer, userName, correctAnswer) => { // вывод НЕПРАВИЛЬНОГО ответа
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was
    '${correctAnswer}'. Let's try again, ${userName}!`);
};

export default (getPair, rules) => { // тело игры- - постоянная структура. запрос переменных
  console.log('Welcome to Brain Games!');
  const rulesText = rules();
  console.log(rulesText);
  const userName = getUserName();

  const iter = (sumOfCorrectAnswer) => {
    if (sumOfCorrectAnswer === 3) {
      return congratulate(userName);
    }

    const pairForGame = getPair(); // пара на первый круг

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
