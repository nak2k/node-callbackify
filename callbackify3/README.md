# callbackify3

Make callback functions from async functions.

## Installation

```
npm i callbackify3 -S
```

## Usage

``` javascript
const { callbackify } = require('callbackify3');

const callback = callbackify(async (arg1, arg2) => { ... });
// callback.length === 3
```

## License

MIT
