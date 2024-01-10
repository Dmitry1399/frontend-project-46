import { test, expect, describe } from '@jest/globals';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCorrectPath = (fileName) => path.resolve(__dirname, '..', '__fixtures__', fileName);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf-8' });

describe('comparison two files', () => {
  test.each([
    ['file1.json', 'file2.json', 'stylish', 'correctStylish.txt'],
    ['file1.yml', 'file2.yml', 'stylish', 'correctStylish.txt'],
    ['file1.yml', 'file2.yml', 'plain', 'correctPlain.txt'],
    ['file1.yml', 'file2.yml', 'plain', 'correctPlain.txt'],
    ['file1.json', 'file2.json', 'json', 'correctJSON.txt'],
  ])('two files, depending on the specified format, must be formatted as a result.', (path1, path2, format, expected) => {
    expect(genDiff(
      getCorrectPath(path1),
      getCorrectPath(path2),
      format,
    )).toEqual(readFile(getCorrectPath(expected)));
  });
  test('checking the default formatter.', () => {
    expect(genDiff(
      getCorrectPath('file1.json'),
      getCorrectPath('file2.json'),
    )).toEqual(readFile(getCorrectPath('correctStylish.txt')));
  });
});
