import { test, expect, describe } from '@jest/globals';
import path from 'node:path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { getCorrectPath, readFile } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prefixPath = [__dirname, '..', '__fixtures__'];

describe('comparison two files', () => {
  const pathToJsonFileOne = getCorrectPath(prefixPath, 'file1.json');
  const pathToJsonFileTwo = getCorrectPath(prefixPath, 'file2.json');
  const pathToYmlFileOne = getCorrectPath(prefixPath, 'file1.yml');
  const pathToYmlFileTwo = getCorrectPath(prefixPath, 'file2.yml');

  const correctStylishFile = readFile(getCorrectPath(prefixPath, 'correctStylish.txt'));
  const correctPlainFile = readFile(getCorrectPath(prefixPath, 'correctPlain.txt'));
  const correctJsonFile = readFile(getCorrectPath(prefixPath, 'correctJSON.txt'));
  test.each([
    [pathToJsonFileOne, pathToJsonFileTwo, 'stylish', correctStylishFile],
    [pathToYmlFileOne, pathToYmlFileTwo, 'stylish', correctStylishFile],
    [pathToYmlFileOne, pathToYmlFileTwo, 'plain', correctPlainFile],
    [pathToYmlFileOne, pathToYmlFileTwo, 'plain', correctPlainFile],
    [pathToYmlFileOne, pathToYmlFileTwo, 'json', correctJsonFile],
  ])('two files, depending on the specified format, must be formatted as a result.', (path1, path2, format, expected) => {
    expect(genDiff(path1, path2, format)).toEqual(expected);
  });
});
