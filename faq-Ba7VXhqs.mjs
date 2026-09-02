import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page } from "./site-layout-C82Xm6vR.mjs";
import { t as faqs } from "./faq-Bdo1Z-qC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-Ba7VXhqs.js
var import_jsx_runtime = require_jsx_runtime();
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQ",
		title: "Frequently asked questions",
		lead: "The questions Tamil Nadu electricity consumers ask us most often, answered directly."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-6 text-sm text-muted-foreground",
		children: [
			"Still stuck? Read the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/guides",
				className: "text-primary underline",
				children: "guides"
			}),
			" ",
			"or ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "text-primary underline",
				children: "contact us"
			}),
			"."
		]
	})] })] });
}
//#endregion
export { Faq as component };
