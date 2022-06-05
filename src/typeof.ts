import type { Type } from "./types";

const julnTypeof = <MybeType extends string | 0 | 1 = 1>(
  value: any
): MybeType extends 1
  ? Type
  : MybeType extends string
  ? Type | Lowercase<MybeType>
  : string => {
  let type: any = typeof value;

  if (type === "object") {
    type = Object.prototype.toString
      .call(value)
      .slice(8, -1)
      .toLowerCase() as any;
  }

  if (type === "object") {
    // 兼容 PlainObject
    if (value.__proto__) {
      type = value.constructor.name.toLowerCase();
    }
  }

  return type;
};

export default julnTypeof;
