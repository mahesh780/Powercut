import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Section, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page } from "./site-layout-C82Xm6vR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-sources-DqFFph7k.js
var import_jsx_runtime = require_jsx_runtime();
function Sources() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Trust",
		title: "Data sources",
		lead: "Everything factual on this site traces back to a published official source. Here they are, along with what each one can and cannot tell you."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Planned shutdown notices" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TNPDCL publishes planned shutdown notices on its public outage page, grouped by distribution circle and section. This is the authoritative source for whether work is scheduled in your area. Its limits are real: notices appear at short notice, use feeder shorthand rather than street names, and are occasionally revised or cancelled without an update." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tariff rates and fixed charges" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Slab rates, fixed charges and consumer categories come from the tariff orders issued by the Tamil Nadu Electricity Regulatory Commission. We reproduce the domestic (LT-IA) structure for reference and estimation. Where an order has been revised, the current order prevails over anything shown here." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Complaint and helpline numbers" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The 1912 electricity complaint number and the TNPDCL helpline 94987 94987 are published by the utility. Section office numbers are printed on individual bills and vary by connection, so we point readers to the bill rather than listing them." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "District, circle and town information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "District names follow the current Tamil Nadu administrative list of 38 districts. Distribution circle names follow TNPDCL's public circle structure, which does not always match district boundaries exactly — newer districts sometimes still appear under a parent district's circle heading in notices." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What we do not have" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No live API feed of outages, and no real-time restoration tracking." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No access to individual consumer accounts, meters or billing records." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No advance knowledge of shutdowns before they are officially published." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is why every page on the site ends at the same place: confirm with TNPDCL before relying on any timing." })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display font-bold",
				children: "Official sources"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLinks, {})
			})]
		}) })]
	}) })] });
}
//#endregion
export { Sources as component };
