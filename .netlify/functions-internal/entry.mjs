import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_74916aac.mjs';

const _page0  = () => import('./chunks/generic_3397f2c8.mjs');
const _page1  = () => import('./chunks/index_fb054b17.mjs');
const _page2  = () => import('./chunks/inukami-index_b8ec0365.mjs');
const _page3  = () => import('./chunks/menu-fried_7e596c5b.mjs');
const _page4  = () => import('./chunks/menu-ramen_32d8d35c.mjs');
const _page5  = () => import('./chunks/menu-niku_3f9e2570.mjs');
const _page6  = () => import('./chunks/contact_5b9658ca.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/inu-kami/inukami-index.astro", _page2],["src/pages/inu-kami/menu-fried.astro", _page3],["src/pages/inu-kami/menu-ramen.astro", _page4],["src/pages/inu-kami/menu-niku.astro", _page5],["src/pages/inu-kami/contact.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
