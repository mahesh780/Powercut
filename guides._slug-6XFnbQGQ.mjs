import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page } from "./site-layout-C82Xm6vR.mjs";
import { n as guides } from "./guides-BRogxE4k.mjs";
import { t as Route } from "./guides._slug-B82lW9T7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides._slug-6XFnbQGQ.js
var import_jsx_runtime = require_jsx_runtime();
function renderBlock(b, i) {
	switch (b.type) {
		case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: b.text }, i);
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: b.text }, i);
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: b.text }, i);
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: b.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, it)) }, i);
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "not-prose my-6 overflow-x-auto rounded-xl border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: b.head.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 text-left font-semibold",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: b.rows.map((r, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-t",
					children: r.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-2",
						children: c
					}, ci))
				}, ri)) })]
			})
		}, i);
	}
}
function GuidePage() {
	const { guide: g } = Route.useLoaderData();
	const related = guides.filter((x) => x.slug !== g.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: `${g.category} · ${g.readMins} min read`,
		title: g.title,
		lead: g.intro
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prose, { children: g.body.map(renderBlock) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "Frequently asked questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs: g.faqs })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs text-muted-foreground",
				children: [
					"Last reviewed ",
					g.updated,
					". Rates and procedures change; always confirm with TNPDCL or TNERC before acting on figures in this article."
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display font-bold",
				children: "More guides"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3 text-sm",
				children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/guides/$slug",
					params: { slug: r.slug },
					className: "text-primary underline underline-offset-4",
					children: r.title
				}) }, r.slug))
			})]
		}) })]
	}) })] });
}
//#endregion
export { GuidePage as component };
