import _ from 'lodash';

const getIndent = (spaseCount, bracket = ' ', bracketNumbers = 4) => bracket
  .repeat(bracketNumbers * spaseCount - bracketNumbers);

const getString = (obj, replace) => {
  const iter = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }
    const spaseCount = depth * replace;
    const spase = getIndent(spaseCount);
    const lines = Object
      .entries(data)
      .map(([key, value]) => `${spase}        ${key}: ${iter(value, depth + 1)}`);
    return ['{', ...lines, `${spase}    }`].join('\n');
  };
  return iter(obj, 1);
};

const stylish = (obj) => {
  const iter = (data, spaseCount = 1) => {
    const indent = getIndent(spaseCount);
    const result = data.map((element) => {
      switch (element.type) {
        case 'deleted':
          return `${indent}  - ${element.name}: ${getString(element.value, spaseCount)}`;
        case 'added':
          return `${indent}  + ${element.name}: ${getString(element.value, spaseCount)}`;
        case 'changed':
          return [
            `${indent}  - ${element.name}: ${getString(element.firstValue, spaseCount)}`,
            `${indent}  + ${element.name}: ${getString(element.secondValue, spaseCount)}`,
          ].join('\n');
        case 'unchanged':
          return `${indent}    ${element.name}: ${getString(element.value, spaseCount)}`;
        case 'nested':
          return `${indent}    ${element.name}: ${iter(element.children, spaseCount + 1)}`;
        default:
          throw new Error('stylish function crashing');
      }
    });
    return ['{', ...result, `${indent}}`].join('\n');
  };
  return iter(obj);
};
export default stylish;
