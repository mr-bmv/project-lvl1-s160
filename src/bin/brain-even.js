#!/usr/bin/env node
import { welcome, userGreeting, gameRules,
  playEvenGame, congratulations } from '..';

welcome();
gameRules();
const actual = userGreeting();
playEvenGame(actual);
congratulations(actual);
