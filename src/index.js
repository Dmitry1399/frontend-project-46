import path from 'node:path';
import { fileURLToPath } from 'url';
import { getCorrectPath, readFile } from './utils.js';
import parseFile from './parsers.js';
import calculateDiff from './calculateDiff.js';
import findFormatter from './formaters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];

const genDiff = (path1, path2, format = 'stylish') => {
  const fileContent1 = readFile(getCorrectPath(prefixPath, path1));
  const fileContent2 = readFile(getCorrectPath(prefixPath, path2));
  const exName1 = path.extname(path1);
  const exName2 = path.extname(path2);
  const parsFile1 = parseFile(fileContent1, exName1);
  const pasrsFile2 = parseFile(fileContent2, exName2);
  const diff = calculateDiff(parsFile1, pasrsFile2);
  return findFormatter(diff, format);
};
export default genDiff;
