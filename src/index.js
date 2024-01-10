import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';
import parse from './parsers.js';
import calculateDiff from './calculateDiff.js';
import formate from './formaters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCorrectPath = (fileName) => path.resolve(__dirname, '..', fileName);
const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf-8' });

const getFileContent = (pathFile) => {
  const content = readFile(pathFile);
  const extFile = path.extname(pathFile).substring(1);
  return parse(content, extFile);
};

const genDiff = (path1, path2, format = 'stylish') => {
  const filePath1 = getCorrectPath(path1);
  const filePath2 = getCorrectPath(path2);
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);
  const diff = calculateDiff(fileContent1, fileContent2);
  return formate(diff, format);
};
export default genDiff;
