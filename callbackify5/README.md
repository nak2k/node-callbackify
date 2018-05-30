# callbackify5

Make callback functions from async functions.

## Installation

```
npm i callbackify5 -S
```

## Usage

``` javascript
const { callbackify } = require('callbackify5');

const callback = callbackify(async (arg1, arg2, arg3, arg4) => { ... });
// callback.length === 5
```

## License

MIT
