# [JPL Date and time](../docs/index.md) - JavaScript implementation

## Usage

```js
// TODO:
import jpl from '@jplorg/jpl';
import libDateTime from '@jplorg/lib-date-time';

(async () => {
  await libDateTime.install();

  const inputs = [null];

  const results = await jpl.run('date.now() | date.format("yyyy")', inputs);

  console.log(...results);
})();
```
