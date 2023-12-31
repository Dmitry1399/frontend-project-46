import yaml from 'js-yaml';

const parseFile = (file, extFile) => {
  switch (extFile) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    default:
      return `Unknown type file: ${extFile}`;
  }
};
export default parseFile;
