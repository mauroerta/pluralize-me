import {
  plurals, singulars, irregulars, uncountables
} from './data';

function invertObject(object) {
  const keys = Object.keys(object);
  const response = {};
  keys.forEach((key) => { response[object[key]] = key; });
  return response;
}

function singular(string) {
  const notRegulars = invertObject(irregulars);
  const irregularsKeys = Object.keys(notRegulars);
  const singularKeys = Object.keys(singulars);

  if (!string) {
    return string;
  }

  if (uncountables.indexOf(string.toLowerCase()) >= 0) {
    return string;
  }

  for (const w of irregularsKeys) {
    const pattern = new RegExp(`${w}$`, 'i');
    const replace = notRegulars[w];
    if (pattern.test(string)) {
      return string.replace(pattern, replace)
    }
  }

  for (const reg of singularKeys) {
    const pattern = new RegExp(reg, 'i');
    if (pattern.test(string)) {
      return string.replace(pattern, singulars[reg])
    }
  }

  return string;
}

function plural(string) {
  const response = string;
  const irregularsKeys = Object.keys(irregulars);
  const pluralKeys = Object.keys(plurals);

  if (!string) {
    return response;
  }

  if (uncountables.indexOf(string.toLowerCase()) >= 0) {
    return response;
  }

  for (const w of irregularsKeys) {
    const pattern = new RegExp(`${w}$`, 'i');
    const replace = irregulars[w];

    if (pattern.test(string)) {
      return string.replace(pattern, replace);
    }
  }
  
  for (const reg of pluralKeys) {
    const pattern = new RegExp(reg, 'i');
    if (pattern.test(string)) {
      return string.replace(pattern, plurals[reg]);
    }
  }

  return response;
}

export {
  plural,
  singular
};
