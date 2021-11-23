# base-converter
Simple Module/Package for generating Random Strings

[![npm](https://badgen.net/npm/v/base-converter)](https://www.npmjs.com/package/base-converter)

## Install
```sh
npm install base-converter --save
```

## How to use
```
var BaseConverter = require('base-converter');
```

## Usage
This package has two methods toBase10 and toBase10:

```
Convert from base 10 to another base
console.log(BaseConverter.toBase(10, 2)) // Returns 1010

Convert a from a given base to base 10
console.log(BaseConverter.toBase10('1010', 2)) // Returns 10
```

## License
MIT
