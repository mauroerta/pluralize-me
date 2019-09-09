# 🍞 🍷 pluralizeME

plurilizeME module helps you to singularize or pluralize a given word.

# ⚙ How to use

First of all, install plurilize-me

```bash
npm i plurilize-me
```

or

```bash
yarn add plurilize-me
```

The, you just need to import the singular and plural functions:

```javascript
import { singular, plural } from 'plurilize-me';
```

And use it!

```javascript
const pluralWord = plural(`foot`); // Will return the string  `feet`
const singularWord = singular(`feet`); // Will return the string `foot`
```



# 🎓 Example

```javascript
import { singular, plural } from 'plurilize-me';

const singulars = [
  'foot',
  'computer'
];

let plurals = [];

console.log('Testing singular --> plural');
singulars.forEach(word => {
    const pluralWord = plural(word);
    plurals.push(pluralWord)
    console.log(`The plural of ${word} is ${pluralWord}`);
});
console.log('---------------------------');
console.log('Testing plural --> singular');
plurals.forEach(word => {
    console.log(`The singular of ${word} is ${singular(word)}`);
});
```

The output of this simple code will be:

```
Testing singular --> plural
The plural of foot is feet
The plural of computer is computers
---------------------------
Testing plural --> singular
The singular of feet is foot
The singular of computers is computer
```