# callbackify2

Make callback functions from async functions.

## Installation

```
npm i callbackify2 -S
```

## Usage

``` javascript
const { callbackify } = require('callbackify2');

const callback = callbackify(async (arg1) => { ... });
// callback.length === 2
```

## License

MIT
