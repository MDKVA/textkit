````markdown
# MDKVA TextKit

**MDKVA TextKit** is a lightweight, developer-friendly library of string utilities. Perfect for quick text transformations, automation, and web or app development.


## Features

- **slugify** — Convert a string into a URL-friendly slug.
- **titleCase** — Capitalize the first letter of each word.
- **truncate** — Shorten text to a specified length with an optional ending.
- **randomID** — Generate a random alphanumeric string of given length.
- **reverse** — Reverse the characters in a string.


## Installation

```bash
npm i @mdkva/textkit
````


## Usage

```js
import { slugify, titleCase, truncate, randomID, reverse } from '@mdkva/textkit';

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
```


## Contributions

This project is open source and contributions are welcome!

* GitHub Repository: [https://github.com/mdkva/textkit](https://github.com/mdkva/textkit)
* Feel free to fork, submit issues, or create pull requests.


## Links

* **npm Package:** [https://www.npmjs.com/package/@mdkva/textkit](https://www.npmjs.com/package/@mdkva/textkit)
* **Company Website:** [https://mdkva.com](https://mdkva.com)
* **Contact:** [contact@mdkva.com](mailto:contact@mdkva.com)


## License

MIT License