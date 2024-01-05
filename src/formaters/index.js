import stylish from './stylish.js';
import plain from './plain.js';

const findFormatter = (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      return `Unknown ${format} formatter`;
  }
};
export default findFormatter;
