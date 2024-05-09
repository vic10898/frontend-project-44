#!/usr/bin/env node
import play from '../src/index.js';

const rule = 'What is the result of the expression?';

const game = () => {
  const random1 = Math.round(Math.random() * 100);
  const random2 = Math.round(Math.random() * 100);
  const operators = {
    '*': (n1, n2) => n1 * n2,
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
  };
  const ops = ['+', '-', '*'];
  const opindex = Math.floor(Math.random() * 3);
  const operator = ops[opindex];
  const result = operators[operator](random1, random2);
  const question = `Question: ${random1} ${operator} ${random2}`;
  return [question, result];
};

play(rule, game);
