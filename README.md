# defaults [![CI][ci-badge]][ci-link]

<!-- TODO: Sauce badge -->

Copies owned, enumerable properties from a source object(s) to a target object when the value of that property on the source object is `undefined`.

## Installation

```sh
$ component install ndhoule/defaults
$ npm install @ndhoule/defaults
```

## API

### `defaults(target : Object, sources : ...Object)` => Object

```javascript
var a = { a: 1 };
var b = { a: 2, b: 2 };

defaults(a, b);
console.log(a); //=> { a: 1, b: 2 }
```

## License

Released under the [MIT license](LICENSE.md).

[ci-link]: https://travis-ci.org/ndhoule/defaults
[ci-badge]: https://travis-ci.org/ndhoule/defaults.svg?branch=master
