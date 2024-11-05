import run from "@hippods/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
