import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { NextUIProvider, Card, CardBody, Link } from "@nextui-org/react";
import { StrictMode, useState, useEffect } from "react";
import { IconBrandGithub, IconBrandDiscord, IconBrandLinkedin, IconBrandSteam, IconMail } from "@tabler/icons-react";
function PageContainer({ children }) {
  return /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(NextUIProvider, { children: /* @__PURE__ */ jsx("main", { className: "dark text-foreground bg-background min-h-screen overflow-auto", children }) }) });
}
function onRenderHtml(pageContext) {
  const { Page: Page2, pageProps } = pageContext;
  const pageHtml = renderToString(
    /* @__PURE__ */ jsx(PageContainer, { children: /* @__PURE__ */ jsx(Page2, { ...pageProps }) })
  );
  return escapeInject`
        <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Tronikel</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Fira%20Code:wght@400;700&display=swap" rel="stylesheet">
                </head>

                <body>
                    <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
                 </body>
            </html>`;
}
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
const transparentProfileSrc = "https://cdn.discordapp.com/attachments/1136647387385966722/1136647403852808252/Npw5ItX.svg";
function BgImage({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        style: {
          filter: "invert(18%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(99%) contrast(89%)"
        },
        className: "object-cover w-full h-full top-0 left-0 opacity-20 absolute z-10",
        src: transparentProfileSrc
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "z-50 absolute top-0 left-0 w-full h-full", children })
  ] });
}
function yearsBetweenDates(a, b) {
  const years = Math.abs(a.getTime() - b.getTime()) / (1e3 * 60 * 60 * 24 * 365);
  return years;
}
function YearsBetween({ def, date1, date2 }) {
  const [years, setYears] = useState(def);
  useEffect(() => {
    setYears(yearsBetweenDates(date1, date2));
  }, [date1, date2]);
  return /* @__PURE__ */ jsx("span", { children: years.toFixed(1) });
}
function AboutMe() {
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-unit-lg", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "About me" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-unit-xs", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "Hey, my name is Donatas and I am a",
        " ",
        /* @__PURE__ */ jsx(
          YearsBetween,
          {
            def: 18,
            date1: /* @__PURE__ */ new Date(),
            date2: new Date(2004, 10, 23)
          }
        ),
        " ",
        "year old guy from Lithuania 🇱🇹."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Down to code in 🦀Rust and 🔵Typescript." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Approximately been coding for",
        " ",
        /* @__PURE__ */ jsx(
          YearsBetween,
          {
            def: 3,
            date1: /* @__PURE__ */ new Date(),
            date2: new Date(2019, 9, 1)
          }
        ),
        " ",
        "years."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Current status: ",
      /* @__PURE__ */ jsx("i", { children: "student" })
    ] })
  ] }) }) });
}
function SocialSite({ icon, href, link = true }) {
  const shortened = href.split("/").slice(-2).join("/").split(":").at(-1);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-nowrap gap-unit-sm ", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: icon }),
    link ? /* @__PURE__ */ jsx(Link, { href, target: "_blank", rel: "noreferrer", color: "foreground", children: shortened }) : /* @__PURE__ */ jsx("p", { children: href })
  ] });
}
function Socials() {
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardBody, { className: "flex flex-col gap-unit-lg", children: [
    /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Socials" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-unit-xs", children: [
      /* @__PURE__ */ jsx(
        SocialSite,
        {
          icon: /* @__PURE__ */ jsx(IconBrandGithub, {}),
          href: "https://github.com/Tronikelis"
        }
      ),
      /* @__PURE__ */ jsx(SocialSite, { icon: /* @__PURE__ */ jsx(IconBrandDiscord, {}), href: "tronikel", link: false }),
      /* @__PURE__ */ jsx(
        SocialSite,
        {
          icon: /* @__PURE__ */ jsx(IconBrandLinkedin, {}),
          href: "https://www.linkedin.com/in/tronikel"
        }
      ),
      /* @__PURE__ */ jsx(
        SocialSite,
        {
          icon: /* @__PURE__ */ jsx(IconBrandSteam, {}),
          href: "https://steamcommunity.com/id/tronikel"
        }
      ),
      /* @__PURE__ */ jsx(SocialSite, { icon: /* @__PURE__ */ jsx(IconMail, {}), href: "mailto:contactdonatas@gmail.com" })
    ] })
  ] }) });
}
function Idx() {
  return /* @__PURE__ */ jsx("div", { className: "container px-unit-xl xl:px-unit-4xl mx-auto", children: /* @__PURE__ */ jsx(BgImage, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-unit-3xl items-center py-unit-xl", children: [
    /* @__PURE__ */ jsx("p", { className: "text-6xl", children: "Tronikel" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex-1 flex flex-row justify-evenly gap-unit-xl flex-wrap", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(AboutMe, {}) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Socials, {}) })
    ] })
  ] }) }) });
}
function Page() {
  return /* @__PURE__ */ jsx(Idx, {});
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const idx = [
  {
    configName: "onRenderHtml",
    codeFilePath: "/renderer/+onRenderHtml.tsx",
    isPlusFile: true,
    codeFileExports: import_0
  },
  {
    configName: "Page",
    codeFilePath: "/pages/idx/+Page.tsx",
    isPlusFile: true,
    codeFileExports: import_1
  }
];
export {
  idx as default
};
