import fs from 'node:fs';
import path from 'node:path';

const getCorrectPath = (prefix, filepath) => path.resolve(...prefix, filepath);

const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf-8' });

export {
  getCorrectPath,
  readFile,
};
