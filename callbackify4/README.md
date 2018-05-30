# callbackify4

Make callback functions from async functions.

## Installation

```
npm i callbackify4 -S
```

## Usage

``` javascript
const { callbackify } = require('callbackify4');

const callback = callbackify(async (arg1, arg2, arg3) => { ... });
// callback.length === 4
```

## License

MIT
