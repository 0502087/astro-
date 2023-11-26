import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead, i as addAttribute } from '../astro_34daa064.mjs';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><title>Astro</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>', '</head> <body> <h1>Astro</h1> <a href="inu-kami/inukami-index">1</a>  </body> </html>'])), addAttribute(Astro2.generator, "content"), renderHead());
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/pages/index.astro", void 0);

const $$file = "/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
