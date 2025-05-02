'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawCssStylesArray = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((item) => item.length > 0);

  const cssStylesPairsKeyPlusValue = rawCssStylesArray
    .map((str) => str.split(':').filter((item) => item !== ''))
    .map(([key, value]) => [key.trim(), value.trim()]);

  const cssStylesObject = cssStylesPairsKeyPlusValue.reduce(
    (acc, [key, value]) => {
      acc[key] = value;

      return acc;
    },
    {},
  );

  return cssStylesObject;
}

module.exports = convertToObject;
