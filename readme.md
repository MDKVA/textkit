````markdown
**MDKVA TextKit** is a lightweight, developer-friendly library of string utilities. Perfect for quick text transformations, automation, and web or app development.

---

## Features
- **TextKit.slugify** — Convert a string into a URL-friendly slug.
- **TextKit.titleCase** — Capitalize the first letter of each word.
- **TextKit.truncate** — Shorten text to a specified length with an optional ending.
- **TextKit.randomID** — Generate a random alphanumeric string of a given length.
- **TextKit.reverse** — Reverse all characters in a string.
- **TextKit.lowercase** — Convert all characters to lowercase.
- **TextKit.uppercase** — Convert all characters to uppercase.
- **TextKit.startsWithLetter** — Check whether a string starts with a specific letter.
- **TextKit.repeatText** — Repeat a string a given number of times.

---

## Installation
```bash
npm i @mdkva/textkit
````

---

## Usage
```js
import { TextKit } from '@mdkva/textkit';

const text = "MDK Visionary Automations simplifies life through human-centered innovation that reclaims time, strengthens focus, and supports meaningful personal growth.";

// TextKit.slugify
console.log('Slugify:', TextKit.slugify(text));

// TextKit.titleCase
console.log('TitleCase:', TextKit.titleCase(text));

// TextKit.truncate
console.log('Truncate (30 chars):', TextKit.truncate(text, 30));

// TextKit.randomID
console.log('RandomID (8 chars):', TextKit.randomID(8));
console.log('RandomID (12 chars):', TextKit.randomID(12));

// TextKit.reverse
console.log('Reverse:', TextKit.reverse(text));

// TextKit.lowercase
console.log('Lowercase:', TextKit.lowercase(text));

// TextKit.uppercase
console.log('Uppercase:', TextKit.uppercase(text));

// TextKit.startsWithLetter
console.log('Starts With "M"?', TextKit.startsWithLetter(text, 'M'));
console.log('Starts With "A"?', TextKit.startsWithLetter(text, 'A'));

// TextKit.repeatText
console.log('Repeat Text (2 times):', TextKit.repeatText("MDKVA ", 2));
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

---

## License
MIT License