import yaml from 'js-yaml';

const parse = (file, type) => {
  switch (type) {
    case 'json':
      return JSON.parse(file);
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    default:
      return `Unknown type file: ${type}`;
  }
};
export default parse;
