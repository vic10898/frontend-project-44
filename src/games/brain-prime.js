import play from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const random = Math.round(Math.random() * 100);
  let result = 'yes';
  for (let j = 2; j <= random / 2; j += 1) {
    if (random % j === 0) {
      result = 'no';
    }
  }
  const question = `Question: ${random}`;
  return [question, result];
};

const gamePrime = () => play(rule, game);

export default gamePrime;
