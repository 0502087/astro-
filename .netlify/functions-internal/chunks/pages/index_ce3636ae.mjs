import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent, g as renderHead, i as addAttribute } from '../astro_c57a7b58.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> </nav>`;
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Astro</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>', '</head> <body> <h1>Astro</h1> <a href="inu-kami/inukami-index">123</a> ', " <!-- {\n			posts.map(post=>post.url)\n		} -->  </body> </html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Nav", $$Nav, {}));
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/pages/index.astro", void 0);

const $$file = "/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
