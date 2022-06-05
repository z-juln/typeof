# typeof

## 介绍

- 封装过的typeof，比原生精明不少，且完美支持typescript类型提示
- 提供了babel插件，直接替换原生的typeof

## api使用

`$ npm install typeof`

```javascript
const { typeOf, isFunction, isNull, ... } = require('@juln/typeof');
// or
import { typeof, isFunction, isNull, ... } from '@juln/typeof';
```

```javascript

console.log(typeOf('a string'));
// -> 'string'

console.log(typeOf([1, 2, 3, '4']));
// -> 'array'

console.log(typeOf(null));
// -> 'null'

console.log(typeOf(new Buffer(0)));
// -> 'buffer'

function Person() {}
console.log(typeOf(new Person()));
// -> 'person'
```
