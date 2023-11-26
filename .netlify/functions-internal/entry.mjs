import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_80155b6e.mjs';

const _page0  = () => import('./chunks/generic_3397f2c8.mjs');
const _page1  = () => import('./chunks/index_152f8b2a.mjs');
const _page2  = () => import('./chunks/index_2bdbf2cd.mjs');
const _page3  = () => import('./chunks/menu-fried_31c30818.mjs');
const _page4  = () => import('./chunks/menu-ramen_62e31307.mjs');
const _page5  = () => import('./chunks/menu-niku_bcbfd0fe.mjs');
const _page6  = () => import('./chunks/contact_5b9658ca.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/inu-kami/index.astro", _page2],["src/pages/inu-kami/menu-fried.astro", _page3],["src/pages/inu-kami/menu-ramen.astro", _page4],["src/pages/inu-kami/menu-niku.astro", _page5],["src/pages/inu-kami/contact.astro", _page6]]);
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
