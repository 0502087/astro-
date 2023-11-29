/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderSlot, k as renderComponent, g as renderHead } from '../astro_5bb02664.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class=""> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> <a href="#">link</a> </nav>`;
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { myTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <h1>${myTitle}</h1> <img src="/01/ramen-1.png" alt=""> </header>`;
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Master;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>', "</head> ", " ", " ", " </html>"])), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderComponent($$result, "Header", $$Header, { "myTitle": "ddddqqddqdqd" }), renderSlot($$result, $$slots["default"]));
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/templates/Master.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="inu-kami/inukami-index">123</a>  ` })}  `;
}, "/Users/yixiaoxiong/Documents/MSI\u7DB2\u9801/astro_\u4F5C\u54C1\u96C6/src/pages/index.astro", void 0);

const $$file = "/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
