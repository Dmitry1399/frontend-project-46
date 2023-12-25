import getJsonParse from './parserJson.js';
import getParseYaml from './parserYml.js';

const parseFile = (file, pathFile) => {
  let result;
  if (pathFile.endsWith('json')) {
    result = getJsonParse(file);
  }
  if (pathFile.endsWith('yaml') || pathFile.endsWith('yml')) result = getParseYaml(file);
  return result;
};

export default parseFile;
