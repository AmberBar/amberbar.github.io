import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  locales: {
    "/": {
      lang: "zh-CN",
      title: "这是Amber的知识库",
      description: "A docs demo for vuepress-theme-hope",
    }
  },

  theme,

  shouldPrefetch: false,
});