import path from 'node:path';
import { fileURLToPath } from 'url';
import { getCorrectPath, readFile } from './utils.js';
import parseFile from './parsers.js';
import calculateDiff from './calculateDiff.js';
import findFormatter from '../formaters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];

const genDiff = (path1, path2, format = 'stylish') => {
  const fileCOntent1 = readFile(getCorrectPath(prefixPath, path1));
  const fileCOntent2 = readFile(getCorrectPath(prefixPath, path2));
  const exName1 = path.extname(path1);
  const exName2 = path.extname(path2);
  const psrsFile1 = parseFile(fileCOntent1, exName1);
  const psrsFile2 = parseFile(fileCOntent2, exName2);
  const diff = calculateDiff(psrsFile1, psrsFile2);
  return findFormatter(diff, format);
};
export default genDiff;
