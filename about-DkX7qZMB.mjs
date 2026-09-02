import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page } from "./site-layout-C82Xm6vR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DkX7qZMB.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About",
		title: "About TNEB Power Cut",
		lead: "An independent information service for Tamil Nadu electricity consumers — planned shutdowns, tariffs, bills and safety, written in plain language."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Why this site exists" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Power shutdown information in Tamil Nadu is public, but it is scattered. Notices are indexed by feeder and section names that most residents have never heard of, printed in district newspaper editions, or pasted on a wall near the transformer. Someone whose supply is off at eleven in the morning simply wants to know two things: was this planned, and when will it come back." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TNEB Power Cut exists to answer those questions with the fewest steps possible, and then to explain the things that come after them — why the bill jumped, what the slabs mean, what a sanctioned load is, and how to reduce consumption without guesswork." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What we do" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Explain how to confirm a planned shutdown for your section, district by district across all 38 districts." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"Maintain a free ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tneb-bill-calculator",
					children: "TNEB bill calculator"
				}),
				" and a",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/tneb-tariff",
					children: "tariff slab reference"
				}),
				"."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Publish practical guides on billing, saving units, outage safety and solar." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Point to the official TNPDCL and TNERC sources for anything authoritative." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What we do not do" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not restore supply, register complaints, issue bills, or claim to know outage timings before TNPDCL publishes them. We are not affiliated with TNPDCL, TANGEDCO, TNERC or any government body, and we do not represent them in any capacity. Where our content and an official source disagree, the official source is correct." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How the content is produced" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Every article on this site is written and edited by people, not generated and published unchecked. Figures such as tariff rates are taken from published orders, tables are checked line by line against the source, and each page carries a review date. Our",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/editorial-policy",
				children: "editorial policy"
			}),
			" and",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/data-sources",
				children: "data sources"
			}),
			" pages set out the process in detail."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How the site is funded" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The site is free to use and is supported by display advertising. Advertising has no influence on what we publish or how we present it — we do not accept payment for editorial placement, and we do not recommend specific contractors or vendors." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Corrections" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"If you find something wrong, outdated or unclear, tell us through the",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				children: "contact page"
			}),
			". We correct verified errors promptly and update the review date on the affected page."
		] })
	] }) })] });
}
//#endregion
export { About as component };
