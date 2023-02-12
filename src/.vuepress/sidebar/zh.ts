import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "Java",
      link: "/java/README.md",
      icon: "lightbulb",
      activeMatch: "^/zh/guide/$",
    },
    { text: "微服务", link: "/micro/README.md" },
    "slides",
  ],
  "/micro/cloud": "structure",
  "/micro/dubbo": "structure",
  "/algorithm": "structure"
});
