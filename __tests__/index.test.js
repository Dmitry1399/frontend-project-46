import genDiff from '../src/index.js';
import { getCorrectPath, readFile } from '../src/utils.js';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefixPath = [__dirname, '..', '__fixtures__'];
const pathToFile1Json = getCorrectPath(prefixPath, 'file1.json');
const pathToFile2Json = getCorrectPath(prefixPath, 'file2.json');
const pathExceptedFile = getCorrectPath(prefixPath, 'correctStylish1.txt');
const exceptFile = readFile(pathExceptedFile);

test('comparing two flat files', () => {
expect(genDiff(pathToFile1Json, pathToFile2Json)).toEqual(exceptFile);
})
