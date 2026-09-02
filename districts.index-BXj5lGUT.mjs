import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page } from "./site-layout-C82Xm6vR.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/districts.index-BXj5lGUT.js
var import_jsx_runtime = require_jsx_runtime();
var regions = [
	"Chennai",
	"North",
	"West",
	"Central",
	"Delta",
	"South"
];
function DistrictsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Districts",
		title: "Power shutdown information for every Tamil Nadu district",
		lead: "Pick your district to see its distribution circle, the towns it covers and the local pattern of planned shutdowns. All 38 districts are listed."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-10",
		children: regions.map((r) => {
			const list = districts.filter((d) => d.region === r);
			if (!list.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-xl font-bold",
				children: [r, " Tamil Nadu"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/districts/$slug",
					params: { slug: d.slug },
					className: "rounded-xl border bg-card p-4 shadow-card transition-shadow hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-bold",
							children: d.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: d.circle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: d.towns.slice(0, 3).join(" · ")
						})
					]
				}, d.slug))
			})] }, r);
		})
	}) })] });
}
//#endregion
export { DistrictsIndex as component };
