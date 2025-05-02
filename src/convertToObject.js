'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawCssStylesArray = sourceString
    .split(';')
    .filter((str) => str.trim() !== '');

  const cssStylesObject = rawCssStylesArray.reduce((acc, str) => {
    const [key, value] = str.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return cssStylesObject;
}

module.exports = convertToObject;
