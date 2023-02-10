import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "Java",
      link: "/java/README.md",
      icon: "lightbulb",
      activeMatch: "^/zh/guide/$",
    },
    { text: "微服务", link: "/micro/cloud/README.md", icon: "config" },
    "slides",
  ],
  "/micro/cloud": "structure"
});
