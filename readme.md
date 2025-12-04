````markdown
**MDKVA TextKit** is a lightweight, developer-friendly library of string utilities. Perfect for quick text transformations, automation, and web or app development.

---

## Features
- **slugify** — Convert a string into a URL-friendly slug.
- **titleCase** — Capitalize the first letter of each word.
- **truncate** — Shorten text to a specified length with an optional ending.
- **randomID** — Generate a random alphanumeric string of a given length.
- **reverse** — Reverse all characters in a string.
- **lowercase** — Convert all characters to lowercase.
- **uppercase** — Convert all characters to uppercase.
- **startsWithLetter** — Check whether a string starts with a specific letter.
- **repeatText** — Repeat a string a given number of times.

---

## Installation
```bash
npm i @mdkva/textkit
````

---

## Usage
```js
import {
    slugify,
    titleCase,
    truncate,
    randomID,
    reverse,
    lowercase,
    uppercase,
    startsWithLetter,
    repeatText
} from '@mdkva/textkit';

const text = "MDK Visionary Automations simplifies life through human-centered innovation that reclaims time, strengthens focus, and supports meaningful personal growth.";

// Test Slugify
console.log('Slugify:', slugify(text));

// Test TitleCase
console.log('TitleCase:', titleCase(text));

// Test Truncate
console.log('Truncate (30 chars):', truncate(text, 30));

// Test RandomID
console.log('RandomID (8 chars):', randomID(8));
console.log('RandomID (12 chars):', randomID(12));

// Test Reverse
console.log('Reverse:', reverse(text));

// Test Lowercase
console.log('Lowercase:', lowercase(text));

// Test Uppercase
console.log('Uppercase:', uppercase(text));

// Test startsWithLetter
console.log('Starts With "M"?', startsWithLetter(text, 'M'));
console.log('Starts With "A"?', startsWithLetter(text, 'A'));

// Test repeatText
console.log('Repeat Text (2 times):', repeatText("MDKVA ", 2));
```

---

## Contributions
This project is open source and contributions are welcome!
* GitHub Repository: [https://github.com/mdkva/textkit](https://github.com/mdkva/textkit)
* Feel free to fork, submit issues, or create pull requests.

---

## Links
* **npm Package:** [https://www.npmjs.com/package/@mdkva/textkit](https://www.npmjs.com/package/@mdkva/textkit)
* **Company Website:** [mdkva.com](https://mdkva.com/)
* **Contact:** [contact@mdkva.com](mailto:contact@mdkva.com)
* **Author:** [github.com/MDKDanyalk](https://github.com/MDKDanyalk)

---

## License
MIT License