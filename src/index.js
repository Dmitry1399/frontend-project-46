import path from 'node:path';
import { fileURLToPath } from 'url';
import { getCorrectPath, readFile } from './utils.js';
import parseFile from './parseFile.js';
import stylish from '../formaters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];

const genDiff = (path1, path2) => {
  const pathToFile1 = getCorrectPath(prefixPath, path1);
  const pathToFile2 = getCorrectPath(prefixPath, path2);
  const file1 = readFile(pathToFile1);
  const file2 = readFile(pathToFile2);
  const parseFile1 = parseFile(file1, pathToFile1);
  const parseFile2 = parseFile(file2, pathToFile2);

  return stylish(parseFile1, parseFile2);
};

export default genDiff;
