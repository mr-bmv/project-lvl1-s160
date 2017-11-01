import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to Brain Games!');
};

export const rulesShow = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const userGreeting = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}`);
  return actual;
};


export const questionEven = () => {
  const varNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${varNumber}`);
  return varNumber;
};

export const askYourAnswer = () => {
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

export const congratulat = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const showCorret = () => {
  console.log('Correct!!!');
};

const tryAgain = (varNumber, yourAnswer, name) => {
  const correct = varNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
};

const wrongAnswer = (yourAnswer, name) => {
  const correct = yourAnswer === 'yes' ? 'no' : 'yes';
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
};

export const playEvenGame = (name) => {
  let sumOfCorrectAnswer = 0;

  while (sumOfCorrectAnswer < 3) {
    const varNumber = questionEven();
    const yourAnswer = askYourAnswer();

    if (varNumber % 2 === 0) {
      if (yourAnswer === 'yes') {
        showCorret();
        sumOfCorrectAnswer += 1;
      } else if (yourAnswer === 'no') {
        wrongAnswer(yourAnswer, name);
      } else {
        tryAgain(varNumber, yourAnswer, name);
      }
    }

    if (varNumber % 2 !== 0) {
      if (yourAnswer === 'no') {
        showCorret();
        sumOfCorrectAnswer += 1;
      } else if (yourAnswer === 'yes') {
        wrongAnswer(yourAnswer, name);
      } else {
        tryAgain(varNumber, yourAnswer, name);
      }
    }
  }
};
