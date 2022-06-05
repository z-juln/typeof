type NativeType =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";

export type Type = NativeType | "null";

export const nativeTypes = ["string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function" ];
export const types = [...nativeTypes, "null"];

export const julnTypeof = <MybeType extends string | 0 | 1 = 1>(
  value: any
): MybeType extends 1 ? Type : (MybeType extends string ? Type | Lowercase<MybeType> : string) => {
  let type: any = typeof value;

  if (type === 'object') {
    type = Object.prototype.toString
      .call(value)
      .slice(8, -1)
      .toLowerCase() as any;
  }
  
  if (type === 'object') {
    type = value.constructor.name.toLowerCase();
  }

  return type;
};

// // ts test
// const result1 = julnTypeof('');
// // result1 -> Type 有Type包含的类型的提示
// const result2 = julnTypeof<0>('');
// // result2 -> string 无提示
// const result3 = julnTypeof<'Aaa'>('');
// // result2 -> Type | 'aaa' 有提示，并可自定义返回类型

// // js test
// console.log(julnTypeof(null))
// // -> 'null'
// console.log(julnTypeof(''))
// // -> 'string'
// console.log(julnTypeof([1, 2, 3, '4']));
// // -> 'array'
// console.log(julnTypeof(new ArrayBuffer(0)));
// // -> 'ArrayBuffer'
// class Person {}
// console.log(julnTypeof(new Person()));
// // -> 'person'
