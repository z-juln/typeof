import path from "path";
import { defineConfig } from "rollup";
import pkgJson from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts2 from "rollup-plugin-typescript2";

const getOutput = (
  /** @type {import('rollup').RollupOptions}*/
  config
) =>
  defineConfig({
    paths: "./build",
    sourcemap: true,
    ...config,
  });

/** @type {import('rollup').RollupOptions}*/
const options = {
  input: "src/index.ts",
  plugins: [
    resolve(),
    commonjs(),
    ts2({ config: "./tsconfig.json", extensions: [".js", ".ts", ".tsx"] }),
  ],
  output: [
    getOutput({
      file: path.resolve(__dirname, pkgJson.main),
      format: "cjs",
    }),
    getOutput({
      file: path.resolve(__dirname, pkgJson.module),
      format: "es",
    }),
    getOutput({
      file: path.resolve(__dirname, pkgJson.unpkg),
      format: "umd",
      name: "juln-hooks",
    }),
  ],
  external: ["react"],
};

export default options;
