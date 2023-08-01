const uuidv4 = require('uuid').v4;

const elementFactory = (type, properties = {}) => {
  return {
    id: uuidv4(),
    type,
    properties,
  };
};

module.exports = elementFactory;