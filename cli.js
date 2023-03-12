#!/usr/bin/env node

const readJsonValue = require('./index');

if (process.argv.length < 4) {
  console.log('Usage: node index.js <filepath> <jsonpath>');
  process.exit(1);
}

// get arguments passed on command line
const [filepath, jsonpath] = process.argv.slice(2);
const value = readJsonValue(filepath, jsonpath);

// print value
console.log(value);
