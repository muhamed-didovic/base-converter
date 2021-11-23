# base-system-converter
Simple Module/Package for generating Random Strings

[![npm](https://badgen.net/npm/v/base-system-converter)](https://www.npmjs.com/package/base-system-converter)

## Install
```sh
npm install base-system-converter --save
```

## How to use
```
var BaseConverter = require('base-system-converter');
```

## Usage
This package has two methods toBase() and toBase10():

```
//Convert value from base 10 to another base
console.log(BaseConverter.toBase(10, 2)) // Returns 1010

//Convert value from a given base to base 10
console.log(BaseConverter.toBase10('1010', 2)) // Returns 10
```

## License
MIT
