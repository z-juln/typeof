export type NativeType =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function";

export type Type = NativeType | "null";

export type SimpleType = Exclude<Type, "function" | "object">;

export const nativeTypes = [
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined",
  "object",
  "function",
] as const;

export const types = [...nativeTypes, "null"] as const;

export const simpleTypes = [
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined",
  "null",
] as const;
