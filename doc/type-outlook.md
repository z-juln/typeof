## 类型世界观

### 基本数据类型

simpleType

### 什么是 object

- null 不是，由于 object 的原型链最顶层是 null，有些人会把 null 当成 object，但 null 是特殊的，不能与 object 混为一谈，
- function 是，因为有些工具库会在函数上绑定一些其它的属性，或者说原生的函数就已经有一大堆属性了，所以所有的函数 都是 object
- Array 之类的是，因为构造函数函数属于 function 也都是
- 普通的 object

### 什么是纯洁的 object（PlainObject）

- 没有任何属性（包括原型链）的 Object 都是 PlainObject
- 目前只有 Object.create(null)是 PlainObject

### 数组

- 伪数组（fakeArray）: 有 length 属性且 length 为大于 0 的数字的 object
- 严格的数组（strictArray）：原生方法 Array.isArray 判断
- 随意的数组（casualArray）：伪数组 + 严格的数组
