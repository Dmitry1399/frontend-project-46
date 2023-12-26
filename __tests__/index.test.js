import genDiff from '../src/index.js';
import { getCorrectPath, readFile } from '../src/utils.js';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];

test('comparing two flat JSON files', () => {
  const pathToFile1Json = getCorrectPath(prefixPath, 'file1.json');
  const pathToFile2Json = getCorrectPath(prefixPath, 'file2.json');
  const pathExceptedFile = getCorrectPath(prefixPath, 'correctStylish1.txt');
  const exceptFile = readFile(pathExceptedFile);
  expect(genDiff(pathToFile1Json, pathToFile2Json)).toEqual(exceptFile);
});

test('comparing two flat YML files', () => {
  const pathToFile1Yml = getCorrectPath(prefixPath, 'file1.yml');
  const pathToFile2Yml = getCorrectPath(prefixPath, 'file2.yml');
  const pathExceptedFile = getCorrectPath(prefixPath, 'correctStylish1.txt');
  const exceptFile = readFile(pathExceptedFile);
  expect(genDiff(pathToFile1Yml, pathToFile2Yml)).toEqual(exceptFile);
});
