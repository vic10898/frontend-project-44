#!/usr/bin/env node

import cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = cli();
console.log(`Hello, ${name}`);

export default name;
