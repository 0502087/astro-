import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8172657d.mjs';

const _page0  = () => import('./chunks/generic_63a2367f.mjs');
const _page1  = () => import('./chunks/index_6faa785b.mjs');
const _page2  = () => import('./chunks/inukami-index_07406611.mjs');
const _page3  = () => import('./chunks/menu-fried_49b19fa6.mjs');
const _page4  = () => import('./chunks/menu-ramen_4f605e4c.mjs');
const _page5  = () => import('./chunks/menu-niku_228e7d31.mjs');
const _page6  = () => import('./chunks/contact_ca803da7.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/inu-kami/inukami-index.astro", _page2],["src/pages/inu-kami/menu-fried.astro", _page3],["src/pages/inu-kami/menu-ramen.astro", _page4],["src/pages/inu-kami/menu-niku.astro", _page5],["src/pages/inu-kami/contact.astro", _page6]]);
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
