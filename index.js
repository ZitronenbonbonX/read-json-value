import fs from 'fs';

if (process.argv.length < 4) {
  console.log('Usage: node index.js <filepath> <jsonpath>');
  process.exit(1);
}

// get arguments passed on command line
const [filepath, jsonpath] = process.argv.slice(2);
const existsFile = fs.existsSync(filepath);

if (!existsFile) {
  console.log('File does not exist');
  process.exit(1);
}

// read file
const data = fs.readFileSync(filepath, 'utf8');

try {
  const json = JSON.parse(data);

  // get value
  const value = jsonpath.split('.').reduce((acc, key) => acc[key], json);
  console.log(value);
} catch (e) {
  console.log('Invalid JSON');
  process.exit(1);
}

// run: node index.js ./data.json 'a.b.c'
