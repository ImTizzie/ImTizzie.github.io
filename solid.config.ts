import { defineConfig } from "solid-start/config";
import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  adapter: staticAdapter({ pages: "docs", assets: "docs" }),
  plugins: [solid()]
});
