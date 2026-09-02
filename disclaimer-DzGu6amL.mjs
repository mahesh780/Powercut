import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/disclaimer-DzGu6amL.js
var import_jsx_runtime = require_jsx_runtime();
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Disclaimer",
		lead: "Read this before relying on anything published here for a time-critical or safety-critical decision."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "We are not the electricity board",
			children: "TNEB Power Cut has no affiliation with TNEB, TANGEDCO, TNPDCL, TNERC or any government department. We cannot restore supply, register complaints or change a bill."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Outage information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Shutdown notices are issued and revised by TNPDCL. Our pages explain how to find, read and confirm those notices; they are not a live copy of them. A shutdown may be added, postponed or cancelled after you read anything here. Restoration times stated in official notices are targets, not guarantees." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tariff and billing figures" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Slab rates, fixed charges and calculator output are reproduced for reference and estimation only. They exclude arrears, adjustments, category-specific charges and any revision issued after our last review. The bill issued by TNPDCL is always the authoritative amount." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Safety information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Safety guidance on this site is general awareness material for consumers. It is not a substitute for a licensed electrician. Never work on live equipment, never assume a line is dead because a notice says so, and keep well away from fallen conductors." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "No professional advice" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nothing here is engineering, legal or financial advice. Decisions about wiring, load enhancement, solar installation or disputes with the utility should be taken with a qualified professional and through official channels." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "External content" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Links to official portals and third-party sites are provided for convenience. Their content, availability and accuracy are outside our control." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Questions about anything on this page? Use the",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					children: "contact page"
				}),
				". Full terms are in our",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/terms",
					children: "terms of use"
				}),
				"."
			] })
		] })]
	}) })] });
}
//#endregion
export { Disclaimer as component };
