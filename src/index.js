#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../bin/brain-games.js';

const games = 3;

const play = (rules, game) => {
  console.log(rules);
  let flag = 0;
  for (let i = 0; i < games; i += 1) {
    const [question, rightAnswer] = game();
    console.log(question);
    const answer = readlineSync.question('');
    console.log(`Your answer: ${answer}`);
    if (String(answer) === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default play;
