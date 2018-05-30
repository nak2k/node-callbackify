# callbackify1

Make callback functions from async functions.

## Installation

```
npm i callbackify1 -S
```

## Usage

``` javascript
const { callbackify } = require('callbackify1');

const callback = callbackify(async () => { ... });
// callback.length === 1
```

## License

MIT
