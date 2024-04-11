import readlineSync from 'readline-sync';
import { name } from './brain-games.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let sum = 0;
for (let i = 0; i < 3; i += 1) {
  let random = Math.round(Math.random() * 100)
  console.log(`Question: ${random}`)
  const answer = readlineSync.question('');
  console.log(`Your answer: ${answer}`)
  if (random % 2 === 0) {
    if (answer === 'yes') {
        console.log('Correct!');
        sum += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
  } else {
    if (answer === 'no') {
        console.log('Correct!');
        sum += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`)
        console.log(`Let's try again, ${name}!`)
        break
    }
  }
}
if (sum === 3) {
    console.log(`Congratulations, ${name}!`)
}