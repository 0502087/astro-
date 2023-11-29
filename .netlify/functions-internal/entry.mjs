import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0962f9de.mjs';

const _page0  = () => import('./chunks/generic_2fddbcf6.mjs');
const _page1  = () => import('./chunks/index_58547323.mjs');
const _page2  = () => import('./chunks/inukami-index_0d1f95b4.mjs');
const _page3  = () => import('./chunks/menu-fried_aae5019f.mjs');
const _page4  = () => import('./chunks/menu-ramen_45858289.mjs');
const _page5  = () => import('./chunks/menu-niku_25e11533.mjs');
const _page6  = () => import('./chunks/contact_07a0e371.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/inu-kami/inukami-index.astro", _page2],["src/pages/inu-kami/menu-fried.astro", _page3],["src/pages/inu-kami/menu-ramen.astro", _page4],["src/pages/inu-kami/menu-niku.astro", _page5],["src/pages/inu-kami/contact.astro", _page6]]);
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
