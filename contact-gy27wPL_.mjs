import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-gy27wPL_.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Contact us",
		lead: "Corrections, feedback and content enquiries are welcome. Outage complaints must go to TNPDCL — we cannot act on them."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Email" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Write to ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "contact@tnebpowercut.in" }),
				". We read every message and reply to genuine enquiries, usually within a few working days."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What to include for a correction" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The page address the issue appears on." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The exact sentence or figure you believe is wrong." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A source we can verify, such as a TNERC order or a TNPDCL page." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Verified corrections are applied promptly and the review date on the page is updated. See our ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/editorial-policy",
					children: "editorial policy"
				}),
				" for how we handle them."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What we cannot help with" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Restoring supply or escalating an outage." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bill disputes, meter faults, name changes and new connections." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Predicting when power will return in a specific street." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"All of these are handled by TNPDCL. Use ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1912" }),
				" or",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "94987 94987" }),
				", or the section office number on your bill. Our",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/report",
					children: "reporting guide"
				}),
				" explains what details to keep ready."
			] })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
				title: "Not the electricity board",
				children: "TNEB Power Cut is an independent website. Messages sent here do not reach TNPDCL and are not logged as complaints."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display font-bold",
					children: "Official links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLinks, {})
				})]
			})]
		})]
	}) })] });
}
//#endregion
export { Contact as component };
