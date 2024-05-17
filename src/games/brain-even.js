import play from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const random = Math.round(Math.random() * 100);
  const question = `Question: ${random}`;
  const result = (random % 2 === 0) ? 'yes' : 'no';
  return [question, result];
};

const gameEven = () => play(rule, game);

export default gameEven;
