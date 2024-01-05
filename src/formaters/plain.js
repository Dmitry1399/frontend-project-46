import _ from 'lodash';

const stringify = (value) => {
  if (Array.isArray(value) || _.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (data) => {
  const iter = (object, path = '') => {
    const result = object.map((element) => {
      const newPath = _.compact([path, element.key]).join('.');
      switch (element.type) {
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(element.value)}`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(element.value1)} to ${stringify(element.value2)}`;
        case 'unchanged':
          return null;
        case 'nested':
          return iter(element.children, newPath);
        default:
          throw new Error(`${element.type} is not a valid value`);
      }
    });
    return _.compact([...result]).join('\n');
  };
  return iter(data);
};

export default plain;
