import stylish from './stylish.js';

const findFormatter = (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    default:
      return 'Unknown formatting style';
  }
};
export default findFormatter;
