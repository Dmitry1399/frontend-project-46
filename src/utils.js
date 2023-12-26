import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const getJsonParse = (str) => JSON.parse(str);

const getParseYaml = (str) => parse(str);

const getCorrectPath = (prefix, filepath) => path.resolve(...prefix, filepath);

const readFile = (pathFile) => fs.readFileSync(pathFile, { encoding: 'utf-8' });

export {
  getCorrectPath,
  readFile,
  getJsonParse,
  getParseYaml,
};
