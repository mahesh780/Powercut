import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-bits-BaemK1C6.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ title, lead, children, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "wrap py-12",
		children: [
			title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold sm:text-3xl",
				children: title
			}),
			lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted-foreground",
				children: lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: title ? "mt-6" : "",
				children
			})
		]
	});
}
function Card({ title, children, to, meta }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-lift",
		children: [
			meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-widest text-primary",
				children: meta
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-lg font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-sm text-muted-foreground",
				children
			})
		]
	});
	return to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "block h-full",
		children: inner
	}) : inner;
}
function Prose({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose-article max-w-3xl",
		children
	});
}
function FaqList({ faqs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-3xl divide-y rounded-xl border bg-card",
		children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
			className: "group p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
				className: "cursor-pointer list-none font-display font-bold marker:hidden",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
function faqSchema(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	};
}
function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: it.name,
			item: it.url
		}))
	};
}
//#endregion
export { breadcrumbSchema as a, Section as i, FaqList as n, faqSchema as o, Prose as r, Card as t };
