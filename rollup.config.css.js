import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/styles/_global.scss",
  output: [
    {
      file: "build/global.css",
      format: "esm"
    }
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer],
      extract: true,
      minimize: true,
      modules: false,
      config: false
    })
  ]
};
