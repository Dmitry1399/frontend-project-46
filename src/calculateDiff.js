import _ from 'lodash';

const calculateDiff = (obj1, obj2) => {
  const unionKeys = _.union(_.keys(obj1), _.keys(obj2));
  const sort = unionKeys.toSorted();
  const result = sort
    .map((element) => {
      if (!Object.hasOwn(obj1, element)) {
        return { type: 'added', name: element, value: obj2[element] };
      }
      if (!Object.hasOwn(obj2, element)) {
        return { type: 'deleted', name: element, value: obj1[element] };
      }
      if (_.isObject(obj1[element]) && _.isObject(obj2[element])) {
        return { type: 'nested', name: element, children: calculateDiff(obj1[element], obj2[element]) };
      }
      if (obj1[element] !== obj2[element]) {
        return {
          type: 'changed', name: element, firstValue: obj1[element], secondValue: obj2[element],
        };
      }
      return { type: 'unchanged', name: element, value: obj1[element] };
    });
  return result;
};

export default calculateDiff;
