const fs = require('fs');

/**
 * This Function reads a JSON file and returns the value at the given path. If the file does not exist or the JSON is invalid, the process exits with an error code.
 * @param {string} filepath Path to JSON file
 * @param {string} jsonpath Path to value in JSON file (e.g. "foo.bar.baz")
 * @returns
 */
const readJsonValue = (filepath, jsonpath) => {
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
    return value;
  } catch (e) {
    console.log('Invalid JSON');
    process.exit(1);
  }
};

module.exports = readJsonValue;
