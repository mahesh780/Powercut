import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-C82Xm6vR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shutdown/today",
		label: "Today"
	},
	{
		to: "/shutdown/tomorrow",
		label: "Tomorrow"
	},
	{
		to: "/districts",
		label: "Districts"
	},
	{
		to: "/tneb-bill-calculator",
		label: "Bill Calculator"
	},
	{
		to: "/guides",
		label: "Guides"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-ink text-ink-foreground text-[13px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex flex-wrap items-center gap-x-2 gap-y-1 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "opacity-90",
				children: "Independent information service · not affiliated with TNPDCL / TANGEDCO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "font-medium text-accent underline underline-offset-2",
				href: "https://www.tnebltd.gov.in/outages/viewshutdown.xhtml",
				target: "_blank",
				rel: "noopener noreferrer",
				children: "Official outage portal"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b bg-background/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-lg text-primary-foreground",
						children: "⚡"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-[17px] font-bold",
							children: "TNEB Power Cut"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] uppercase tracking-widest text-muted-foreground",
							children: "tnebpowercut.in"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-5 text-sm font-medium lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/report",
						className: "hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground sm:inline-block",
						children: "Report an outage"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "rounded-md border px-3 py-2 text-sm lg:hidden",
						children: "☰"
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid gap-1 py-3",
				children: [...nav, {
					to: "/report",
					label: "Report an outage"
				}].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
					children: n.label
				}, n.to))
			})
		})]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 border-t bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-bold",
					children: "TNEB Power Cut"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm opacity-80",
					children: "An independent Tamil Nadu electricity information service covering planned shutdowns, tariffs and consumer guides. We are not the electricity board."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Power shutdown",
					links: [
						{
							to: "/shutdown/today",
							label: "Today's shutdown"
						},
						{
							to: "/shutdown/tomorrow",
							label: "Tomorrow's shutdown"
						},
						{
							to: "/shutdown",
							label: "How shutdowns work"
						},
						{
							to: "/districts",
							label: "All districts"
						},
						{
							to: "/report",
							label: "Report an outage"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Tools & guides",
					links: [
						{
							to: "/tneb-bill-calculator",
							label: "TNEB bill calculator"
						},
						{
							to: "/tneb-tariff",
							label: "Tariff reference"
						},
						{
							to: "/guides",
							label: "Electricity guides"
						},
						{
							to: "/faq",
							label: "FAQ"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "About",
					links: [
						{
							to: "/about",
							label: "About us"
						},
						{
							to: "/contact",
							label: "Contact"
						},
						{
							to: "/editorial-policy",
							label: "Editorial policy"
						},
						{
							to: "/data-sources",
							label: "Data sources"
						},
						{
							to: "/privacy-policy",
							label: "Privacy policy"
						},
						{
							to: "/terms",
							label: "Terms of use"
						},
						{
							to: "/disclaimer",
							label: "Disclaimer"
						}
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap border-t border-white/10 py-6 text-xs opacity-70",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" TNEB Power Cut · Independent informational website. Outage information may be incomplete or delayed — always confirm with TNPDCL before relying on it."
			]
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold uppercase tracking-widest opacity-70",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-2 text-sm",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "opacity-90 hover:opacity-100 hover:underline",
			children: l.label
		}) }, l.to))
	})] });
}
function Page({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function PageHero({ eyebrow, title, lead, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-3xl font-bold sm:text-4xl",
					children: title
				}),
				lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-muted-foreground",
					children: lead
				}),
				children
			]
		})
	});
}
function Callout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-accent bg-accent/25 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display font-bold text-accent-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm text-accent-foreground/90",
			children
		})]
	});
}
function OfficialLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "space-y-2 text-sm",
		children: [[
			{
				href: "https://www.tnebltd.gov.in/outages/viewshutdown.xhtml",
				label: "TNPDCL planned shutdown portal"
			},
			{
				href: "https://www.tnebnet.org/",
				label: "TNPDCL online services & bill payment"
			},
			{
				href: "https://www.tnerc.gov.in/",
				label: "TNERC tariff orders and regulations"
			}
		].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: l.href,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "font-medium text-primary underline underline-offset-4",
			children: [l.label, " ↗"]
		}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "text-muted-foreground",
			children: [
				"Fault reporting: ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1912" }),
				" or ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "94987 94987" }),
				" (TNPDCL)"
			]
		})]
	});
}
//#endregion
export { PageHero as i, OfficialLinks as n, Page as r, Callout as t };
