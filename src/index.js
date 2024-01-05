import path from 'node:path';
import { fileURLToPath } from 'url';
import { getCorrectPath, readFile } from './utils.js';
import parseFile from './parsers.js';
import calculateDiff from './calculateDiff.js';
import formate from './formaters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];

const genDiff = (path1, path2, format = 'stylish') => {
  const fileContent1 = readFile(getCorrectPath(prefixPath, path1));
  const fileContent2 = readFile(getCorrectPath(prefixPath, path2));
  const extName1 = path.extname(path1).substring(1);
  const extName2 = path.extname(path2).substring(1);
  const parseFile1 = parseFile(fileContent1, extName1);
  const parseFile2 = parseFile(fileContent2, extName2);
  const diff = calculateDiff(parseFile1, parseFile2);
  return formate(diff, format);
};
export default genDiff;
