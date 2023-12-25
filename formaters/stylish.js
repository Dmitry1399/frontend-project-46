import _ from 'lodash';

const dictionaryStates = {
  added: '+ ',
  deleted: '- ',
  unchanged: '  ',
};

const stylish = (obj1, obj2) => {
  const object1Keys = Object.keys(obj1);
  const object2Keys = Object.keys(obj2);
  const unionKeys = _.union(object1Keys, object2Keys);
  const sortedKeys = _.sortBy(unionKeys);
  const result = sortedKeys.reduce((acc, element) => {
    if (!Object.hasOwn(obj1, element)) {
      acc.push(`  ${dictionaryStates.added}${element}: ${obj2[element]}`);
    } else if (!Object.hasOwn(obj2, element)) {
      acc.push(`  ${dictionaryStates.deleted}${element}: ${obj1[element]}`);
    } else if (Object.hasOwn(obj1 && obj2, element) && obj1[element] !== obj2[element]) {
      acc.push(`  ${dictionaryStates.deleted}${element}: ${obj1[element]}`);
      acc.push(`  ${dictionaryStates.added}${element}: ${obj2[element]}`);
    } else acc.push(`  ${dictionaryStates.unchanged}${element}: ${obj1[element]}`);
    return [...acc];
  }, []);

  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
