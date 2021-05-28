import path from "path";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import { Minifier } from "css-loader-minify-class";
import { visualizer } from "rollup-plugin-visualizer";
import packageJson from "./package.json";

const minifier = new Minifier({ prefix: "_aui-" }).getLocalIdent;

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: false
    }
  ],
  plugins: [
    alias({
      entries: {
        "@icons": path.resolve("./src/assets/icons"),
        "@images": path.resolve("./src/assets/images"),
        "@hooks": path.resolve("./src/hooks"),
        "@utils": path.resolve("./src/utils")
      }
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [autoprefixer],
      minimize: true,
      modules: {
        generateScopedName: (localName) => minifier({ resourcePath: "" }, null, localName)
      },
      config: false
    }),
    svgr(),
    terser(),
    visualizer()
  ]
};
