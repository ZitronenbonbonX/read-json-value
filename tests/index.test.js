const fs = require('fs');
const readJsonValue = require('../index');

describe('readJsonValue', () => {
  it('should return value at given path', () => {
    const json = { foo: { bar: { baz: 'qux' } } };
    const filepath = '/path/to/json/file';
    const jsonpath = 'foo.bar.baz';
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fs, 'readFileSync').mockReturnValue(JSON.stringify(json));
    const result = readJsonValue(filepath, jsonpath);
    expect(result).toBe('qux');
  });

  it('should exit with error code if file does not exist', () => {
    const filepath = '/path/to/json/file';
    const jsonpath = 'foo.bar.baz';
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    jest.spyOn(process, 'exit').mockImplementation((code) => {
      expect(code).toBe(1);
      return null;
    });
    readJsonValue(filepath, jsonpath);
  });

  it('should exit with error code if JSON is invalid', () => {
    const filepath = '/path/to/json/file';
    const jsonpath = 'foo.bar.baz';
    const invalidJson = '{ "foo": "bar" }'; // missing closing brace
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fs, 'readFileSync').mockReturnValue(invalidJson);
    jest.spyOn(process, 'exit').mockImplementation((code) => {
      expect(code).toBe(1);
      return null;
    });
    readJsonValue(filepath, jsonpath);
  });
});
