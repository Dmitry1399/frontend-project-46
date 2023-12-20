import getJsonParse from './parserJson.js';
import getParseYaml from './parserYml.js';

const parseFile = (file, pathFile) => {
    if(pathFile.endsWith('json')) {
       return getJsonParse(file);
    }
    if (pathFile.endsWith('yaml') || pathFile.endsWith('yml'))
    return getParseYaml(file)
}

export default parseFile;