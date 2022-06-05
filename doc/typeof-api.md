## typeof api

```javascript
const { julnTypeof, isFunction, isNull, ... } = require('@juln/typeof');
// or
import { julnTypeof, isFunction, isNull, ... } from '@juln/typeof';
```

```javascript
import { julnTypeof } from "@juln/typeof"; // 返回值均为小写

console.log(julnTypeof("a string")); // -> 'string'
console.log(julnTypeof([1, 2, 3, "4"])); // -> 'array'
console.log(julnTypeof(null)); // -> 'null'
console.log(julnTypeof(new Buffer(0))); // -> 'buffer'
function Person() {}
console.log(julnTypeof(new Person())); // -> 'person'
```

```typescript
import { julnTypeof } from "@juln/typeof";
import type { Type } from "@juln/typeof";
// Type -> "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null"
// 在原生基础上多个"null"

const result1 = julnTypeof("");
// result1 -> Type 有Type包含的类型的提示

const result2 = julnTypeof<0>("");
// result2 -> string 无提示

const result3 = julnTypeof<"Aaa">("");
// result2 -> Type | 'aaa' 有提示，并可自定义返回类型
```
