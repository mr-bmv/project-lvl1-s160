import readlineSync from './../readline-sync';

const userGreeting = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}`);
};

export default userGreeting;
