import _ from 'lodash';

const tree = [{
  type: 'nested',
  name: 'common',
  children:
 [{ type: 'added', name: 'follow', value: false },
   { type: 'unchanged', name: 'setting1', value: 'Value 1' },
   { type: 'deleted', name: 'setting2', value: 200 },
   {
     type: 'changed',
     name: 'setting3',
     firstValue: true,
     secondValue: null,
   },
   { type: 'added', name: 'setting4', value: 'blah blah' },
   { type: 'added', name: 'setting5', value: { key5: 'value5' } },
   {
     type: 'nested',
     name: 'setting6',
     children:
      [{
        type: 'nested',
        name: 'doge',
        children:
       [{
         type: 'changed', name: 'wow', firstValue: '', secondValue: 'so much',
       }],
      },
      { type: 'unchanged', name: 'key', value: 'value' },
      { type: 'added', name: 'ops', value: 'vops' }],
   }],
},
{
  type: 'nested',
  name: 'group1',
  children:
 [{
   type: 'changed',
   name: 'baz',
   firstValue: 'bas',
   secondValue: 'bars',
 },
 { type: 'unchanged', name: 'foo', value: 'bar' },
 {
   type: 'changed',
   name: 'nest',
   firstValue: { key: 'value' },
   secondValue: 'str',
 }],
},
{
  type: 'deleted',
  name: 'group2',
  value: { abc: 12345, deep: { id: 45 } },
},
{
  type: 'added',
  name: 'group3',
  value: { deep: { id: { number: 45 } }, fee: 100500 },
}];

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
