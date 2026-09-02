import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page } from "./site-layout-C82Xm6vR.mjs";
import { n as guides } from "./guides-BRogxE4k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides.index-6SYV2nEh.js
var import_jsx_runtime = require_jsx_runtime();
function GuidesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Guides",
		title: "Tamil Nadu electricity guides",
		lead: "Written for households and small businesses: how billing actually works, what the tariff slabs mean in rupees, and how to handle planned and unplanned power cuts."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children: guides.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/guides/$slug",
			params: { slug: g.slug },
			className: "rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] font-semibold uppercase tracking-widest text-primary",
					children: [
						g.category,
						" · ",
						g.readMins,
						" min read"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-lg font-bold",
					children: g.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: g.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: ["Updated ", g.updated]
				})
			]
		}, g.slug))
	}) })] });
}
//#endregion
export { GuidesIndex as component };
