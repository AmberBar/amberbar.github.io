import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Java",
    icon: "discover", 
    link: "/java/"
  },
  {
    text: "微服务",
    icon: "creative",
    prefix: "/micro/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "dubbo/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Bar",
        icon: "creative",
        prefix: "cloud/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press//",
  },
]);
