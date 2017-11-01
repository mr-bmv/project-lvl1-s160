import { greeting, userGreeting, rulesShow,
  playEvenGame, congratulat } from '..';

export default () => {
  greeting();
  rulesShow();
  const actual = userGreeting();
  playEvenGame(actual);
  congratulat(actual);
};
