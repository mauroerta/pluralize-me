const plurals = {
  '(quiz)$': '$1zes',
  '^(ox)$': '$1en',
  '([m|l])ouse$': '$1ice',
  '(matr|vert|ind)ix|ex$': '$1ices',
  '(x|ch|ss|sh)$': '$1es',
  '([^aeiouy]|qu)y$': '$1ies',
  '(hive)$': '$1s',
  '(?:([^f])fe|([lr])f)$': '$1$2ves',
  '(shea|lea|loa|thie)f$': '$1ves',
  sis$: 'ses',
  '([ti])um$': '$1a',
  '(tomat|potat|ech|her|vet)o$': '$1oes',
  '(bu)s$': '$1ses',
  '(alias)$': '$1es',
  '(octop)us$': '$1i',
  '(ax|test)is$': '$1es',
  '(us)$': '$1es',
  '([^s]+)$': '$1s'
};

const singulars = {
  '(quiz)zes$': '$1',
  '^(ox)en$': '$1',
  '^([m|l])ice$': '$1ouse',
  '(matr|vert)ices$': '$1ix',
  '(ind)ices$': '$1ex',
  '(us)es$': '$1',
  '([^aeiouy]|qu)ies$': '$1y',
  '([^s]+)s$': '$1',
  '(?:([^f])fe|([lr])f)ves$': '$1$2',
  '(shea|lea|loa|thie)ves$': '$1f',
  sis$: 'ses',
  '([ti])a$': '$1um',
  '(tomat|potat|ech|her|vet)oes$': '$1o',
  '(bu)ses$': '$1s',
  '(octop)i$': '$1us'
};

const irregulars = {
  move: 'moves',
  foot: 'feet',
  goose: 'geese',
  sex: 'sexes',
  child: 'children',
  man: 'men',
  tooth: 'teeth',
  person: 'people'
};

const uncountables = [
  'sheep',
  'fish',
  'deer',
  'moose',
  'series',
  'species',
  'money',
  'rice',
  'information',
  'equipment',
  'bison',
  'cod',
  'offspring',
  'pike',
  'salmon',
  'shrimp',
  'swine',
  'trout',
  'aircraft',
  'hovercraft',
  'spacecraft',
  'sugar',
  'tuna',
  'you',
  'wood'
];

export {
  plurals, singulars, irregulars, uncountables
};
