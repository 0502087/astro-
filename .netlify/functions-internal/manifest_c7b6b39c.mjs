import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_34daa064.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"gsap.to(\"h1\",{x:\"70%\",duration:5});\n"}],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"AOS.init();var a=document.getElementsByClassName(\"thumbnail\");new simpleParallax(a);\n"}],"styles":[{"type":"inline","content":"body{background-color:#000}.BG[data-astro-cid-3rwysew4]{background-image:url(/_astro/BG-1.5b709b74.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:scroll}html{scroll-behavior:smooth}header[data-astro-cid-3rwysew4]{background-image:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4),rgba(0,0,0,.4)),url(/_astro/bg.19807dad.svg);background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed}\n"}],"routeData":{"route":"/inu-kami/inukami-index","type":"page","pattern":"^\\/inu-kami\\/inukami-index\\/?$","segments":[[{"content":"inu-kami","dynamic":false,"spread":false}],[{"content":"inukami-index","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inu-kami/inukami-index.astro","pathname":"/inu-kami/inukami-index","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{background-image:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(/_astro/9979164_4253128.8a49aea2.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}section[data-astro-cid-q53iugc2]{inset:0}\n"}],"routeData":{"route":"/inu-kami/menu-fried","type":"page","pattern":"^\\/inu-kami\\/menu-fried\\/?$","segments":[[{"content":"inu-kami","dynamic":false,"spread":false}],[{"content":"menu-fried","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inu-kami/menu-fried.astro","pathname":"/inu-kami/menu-fried","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{background-image:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(/_astro/9979164_4253128.8a49aea2.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}section[data-astro-cid-xkkmzmra]{inset:0}\n"}],"routeData":{"route":"/inu-kami/menu-ramen","type":"page","pattern":"^\\/inu-kami\\/menu-ramen\\/?$","segments":[[{"content":"inu-kami","dynamic":false,"spread":false}],[{"content":"menu-ramen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inu-kami/menu-ramen.astro","pathname":"/inu-kami/menu-ramen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{background-image:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(/_astro/9979164_4253128.8a49aea2.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}section[data-astro-cid-arhirlms]{inset:0}\n"}],"routeData":{"route":"/inu-kami/menu-niku","type":"page","pattern":"^\\/inu-kami\\/menu-niku\\/?$","segments":[[{"content":"inu-kami","dynamic":false,"spread":false}],[{"content":"menu-niku","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inu-kami/menu-niku.astro","pathname":"/inu-kami/menu-niku","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{background-image:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url(/_astro/9979164_4253128.8a49aea2.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}section[data-astro-cid-mcjdxito]{inset:0}\n"}],"routeData":{"route":"/inu-kami/contact","type":"page","pattern":"^\\/inu-kami\\/contact\\/?$","segments":[[{"content":"inu-kami","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inu-kami/contact.astro","pathname":"/inu-kami/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/inu-kami/contact.astro",{"propagation":"none","containsHead":true}],["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/inu-kami/inukami-index.astro",{"propagation":"none","containsHead":true}],["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/inu-kami/menu-fried.astro",{"propagation":"none","containsHead":true}],["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/inu-kami/menu-niku.astro",{"propagation":"none","containsHead":true}],["/Users/yixiaoxiong/Documents/MSI網頁/astro_作品集/src/pages/inu-kami/menu-ramen.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/inu-kami/contact.astro":"chunks/pages/contact_9d45d5ee.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_08c8da6f.mjs","/src/pages/index.astro":"chunks/pages/index_b21d4aa9.mjs","/src/pages/inu-kami/inukami-index.astro":"chunks/pages/inukami-index_709204e4.mjs","/src/pages/inu-kami/menu-fried.astro":"chunks/pages/menu-fried_5b9b560b.mjs","/src/pages/inu-kami/menu-niku.astro":"chunks/pages/menu-niku_49ae96fe.mjs","/src/pages/inu-kami/menu-ramen.astro":"chunks/pages/menu-ramen_d8ef237c.mjs","\u0000@astrojs-manifest":"manifest_c7b6b39c.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3397f2c8.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_740f2d37.mjs","\u0000@astro-page:src/pages/inu-kami/inukami-index@_@astro":"chunks/inukami-index_b8ec0365.mjs","\u0000@astro-page:src/pages/inu-kami/menu-fried@_@astro":"chunks/menu-fried_7e596c5b.mjs","\u0000@astro-page:src/pages/inu-kami/menu-ramen@_@astro":"chunks/menu-ramen_32d8d35c.mjs","\u0000@astro-page:src/pages/inu-kami/menu-niku@_@astro":"chunks/menu-niku_3f9e2570.mjs","\u0000@astro-page:src/pages/inu-kami/contact@_@astro":"chunks/contact_5b9658ca.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.c9294c03.js","/astro/hoisted.js?q=0":"_astro/hoisted.e7c6316b.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/9979164_4253128.8a49aea2.jpg","/_astro/bg.19807dad.svg","/_astro/BG-1.5b709b74.jpg","/favicon.svg","/01/160629-2228-0-2PEF6.jpg","/01/1624278632-652df9a791cf6483dece7c57d47fc487.jpg.webp","/01/28279456_7421588.eps","/01/31b647c83a878ea2.jpg","/01/33618427_new_years_card_261_b.jpg","/01/7-3-edited.png.webp","/01/8d8a1339911f6778.jpg","/01/98e0dc6eff655e1dee96eb045615de8c.jpg","/01/9979164_4253128.jpg","/01/BG-1.jpg","/01/Comp 1.gif","/01/DSC07950.jpg","/01/DSCF9919.jpg.webp","/01/IMG_5162.PNG","/01/OK_logo.svg","/01/a2000642_main.jpg.webp","/01/bg.svg","/01/danis-lou-jfZfdQtcH6k-unsplash.jpg","/01/gourmet-ramen-noodles-pork-meat-vegetable-soup-generated-by-ai.jpg","/01/istockphoto-1466542489-612x612.jpg","/01/jakub-dziubak-L7POzOAoaQY-unsplash.jpg","/01/linh-nguyen-pRix09LZ5CY-unsplash.jpg","/01/ramen-1.png","/01/ramen-noodles-pork-bone-soup-with-roast-pork-egg_1339-181141(1).png","/01/tonkatsu-pork-japanese-style-food.jpg","/01/柴犬1.png","/01/柴犬4.png"]});

export { manifest };
