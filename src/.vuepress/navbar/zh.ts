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
    prefix: "/micro/",
    children: [
      {
        text: "Spring Cloud",
        prefix: "cloud/",
        children: ["info", { text: "Spring Cloud", link: "" }],
      },
      {
        text: "Dubbo",
        prefix: "dubbo/",
        children: ["info", { text: "dubbo",  link: "" }],
      }
    ],
  },
  {
    text: "容器化",
    link: "/container"
  },
  {
    text: "算法",
    icon: "note",
    link: "/algorithm"
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press//",
  // },
]);
