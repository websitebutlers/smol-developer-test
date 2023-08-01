// src/utils/elementProperties.js

const elementProperties = {
  text: {
    fontSize: { type: 'number', default: 16 },
    color: { type: 'string', default: '#000000' },
    content: { type: 'string', default: 'Text Element' },
  },
  image: {
    src: { type: 'string', default: '' },
    alt: { type: 'string', default: '' },
  },
  button: {
    label: { type: 'string', default: 'Button' },
    color: { type: 'string', default: '#000000' },
  },
};

export default elementProperties;