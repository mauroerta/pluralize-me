# 🍞 🍷 pluralizeME

pluralizeME module helps you to singularize or pluralize a given word.

# ⚙ How to use

First of all, install pluralize-me

```bash
npm i pluralize-me
```

or

```bash
yarn add pluralize-me
```

Then, you just need to import the singular and plural functions:

```javascript
import { singular, plural } from 'pluralize-me';
```

And use it!

```javascript
const pluralWord = plural(`foot`); // Will return the string  `feet`
const singularWord = singular(`feet`); // Will return the string `foot`
```



# 🎓 Example

```javascript
import { singular, plural } from 'pluralize-me';

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
