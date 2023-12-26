import { getJsonParse, getParseYaml } from './utils.js';

const parseFile = (file, pathFile) => {
  let result;
  if (pathFile.endsWith('json')) {
    result = getJsonParse(file);
  }
  if (pathFile.endsWith('yaml') || pathFile.endsWith('yml')) result = getParseYaml(file);
  return result;
};
export default parseFile;
