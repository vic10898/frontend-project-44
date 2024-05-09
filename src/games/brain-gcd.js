import play from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const random1 = Math.round(Math.random() * 100);
  const random2 = Math.round(Math.random() * 100);
  let result = 0;
  let maxDivisor = Math.min(random1, random2);
  while (result === 0) {
    if (random1 % maxDivisor === 0 && random2 % maxDivisor === 0) {
      result = maxDivisor;
    } else {
      maxDivisor -= 1;
    }
  }
  const question = `Question: ${random1} ${random2}`;
  return [question, result];
};

const gameGcd = () => play(rule, game);

export default gameGcd;
