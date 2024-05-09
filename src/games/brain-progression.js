import play from '../index.js';

const rule = 'What number is missing in the progression?';

const game = () => {
  const random1 = Math.round(Math.random() * 50);
  const random2 = Math.round(Math.random() * 50);
  const index = Math.round(Math.random() * 9);
  const progression = [random1];
  for (let j = 1; j < 10; j += 1) {
    progression.push(progression[j - 1] + random2);
  }
  const result = progression[index];
  progression[index] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, result];
};


const gameProgression = () => play(rule, game);

export default gameProgression;
