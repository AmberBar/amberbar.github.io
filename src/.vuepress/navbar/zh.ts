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
        text: "Spring Cloud",
        icon: "creative",
        prefix: "cloud/",
        children: ["info", { text: "Spring Cloud", icon: "more", link: "" }],
      },
      {
        text: "Dubbo",
        icon: "creative",
        prefix: "dubbo/",
        children: ["info", { text: "Spring Cloud", icon: "more", link: "" }],
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
