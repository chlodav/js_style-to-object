'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((obj, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return obj;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key && value) {
      obj[key] = value;
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
