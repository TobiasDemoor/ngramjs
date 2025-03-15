# Ngram.js

> String ngram splitter.

This is a light weight open source package for the **server** and **browser** (using module bundler) written with  [TypeScript](https://www.typescriptlang.org). The source code is available on [GitHub](https://github.com/TobiasDemoor/ngramjs) where you can also find our [issue tracker](https://github.com/TobiasDemoor/ngramjs/issues).

## Installation

Run the command below to install the package.

```
npm install --save ngramjs
```

## Example

The code below shows a basic usage example.

```js
import { tokenize, ngram } from 'ngramjs';

tokenize("I like opensource!"); // => ["I", "like", "opensource"]

ngram('opensource', { style: 1, min: 3, max: 5 }); // => ['ope', 'open', 'opens']
ngram('opensource', { style: 2, min: 3, max: 5 }); // => ['ope', 'open', 'opens', 'pen', 'pens', 'penso', 'ens', 'enso', 'ensou']
```

## Forked from [ngramablejs](https://github.com/xpepermint/ngramablejs)