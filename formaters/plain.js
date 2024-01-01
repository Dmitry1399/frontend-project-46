import _ from 'lodash';

const getString = (value) => {
  if (Array.isArray(value) || _.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (data) => {
  const iter = (object, path = []) => {
    const result = object.map((element) => {
      //const newPath = _.compact([path, element.name]).join('.');
      const newPath = path.push(element.name).join('.');
      switch (element.type) {
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'added':
          return `Property '${newPath}' was added with value: ${getString(element.value)}`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${getString(element.firstValue)} to ${getString(element.secondValue)}`;
        case 'unchanged':
          return null;
        case 'nested':
          return iter(element.children, newPath);
        default:
          throw new Error('plain function crashing');
      }
    });
    return _.compact([...result]).join('\n');
  };
  return iter(data);
};

export default plain;
