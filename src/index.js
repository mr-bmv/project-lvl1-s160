import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to Brain Games!');
};

export const gameRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
};

export const userGreeting = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}`);
  console.log('');
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

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const correctAnswer = () => {
  console.log('Correct!!!');
  console.log('');
};

const tryAgain = () => {
  console.log('you can dial just "yes" or "no"');
  console.log('Try again!');
  console.log('');
};

const wrongAnswer = (yourAnswer, name) => {
  const correct = yourAnswer === 'yes' ? 'no' : 'yes';
  console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
  console.log('');
};

export const playEvenGame = (name) => {
  let sumOfCorrectAnswer = 0;

  while (sumOfCorrectAnswer < 3) {
    const varNumber = questionEven();
    const yourAnswer = askYourAnswer();

    if (varNumber % 2 === 0) {
      if (yourAnswer === 'yes') {
        correctAnswer();
        sumOfCorrectAnswer += 1;
      } else if (yourAnswer === 'no') {
        wrongAnswer(yourAnswer, name);
      } else {
        tryAgain();
      }
    }

    if (varNumber % 2 !== 0) {
      if (yourAnswer === 'no') {
        correctAnswer();
        sumOfCorrectAnswer += 1;
      } else if (yourAnswer === 'yes') {
        wrongAnswer(yourAnswer, name);
      } else {
        tryAgain();
      }
    }
  }
};
