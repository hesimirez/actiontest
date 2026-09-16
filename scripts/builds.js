import { rollup } from "rollup";
import { resolve, dirname } from "path";
import vue from "@vitejs/plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { fileURLToPath } from "url";

// 获取当前文件所在目录
const __dirname = dirname(fileURLToPath(import.meta.url));

async function build() {
  const bundle = await rollup({
    input: resolve(__dirname, "../src/index.js"),
    plugins: [vue(), nodeResolve()],
    external: ["vue"],
  });

  await bundle.write({
    file: "dist/index.js",
    format: "esm",
  });
}
build();
