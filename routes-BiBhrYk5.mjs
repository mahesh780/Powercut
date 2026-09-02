import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, t as Card } from "./ui-bits-BaemK1C6.mjs";
import { r as Page } from "./site-layout-C82Xm6vR.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
import { n as guides } from "./guides-BRogxE4k.mjs";
import { t as homeFaqs } from "./routes-EG_YLRsG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BiBhrYk5.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-10 py-14 lg:grid-cols-[1.15fr_1fr] lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Tamil Nadu · TNPDCL / TNEB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-bold leading-[1.1] sm:text-5xl",
						children: "Power shutdown information for every Tamil Nadu district"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-muted-foreground",
						children: "Find out whether the cut on your street is planned maintenance or a fault, learn how to read a TNPDCL shutdown notice, estimate your next TNEB bill, and get the right phone number to call when the lights go out."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shutdown/today",
								className: "rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
								children: "Today's shutdown"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/districts",
								className: "rounded-full border px-5 py-3 text-sm font-semibold",
								children: "Find your district"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tneb-bill-calculator",
								className: "rounded-full border px-5 py-3 text-sm font-semibold",
								children: "Bill calculator"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-bold",
						children: "Power gone right now?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "1."
							}), " Check whether neighbours also have no supply. If only your house is dark, the problem is inside your installation — look at the main switch and the ELCB/MCB."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "2."
								}),
								" If the whole street is out, it is a feeder or transformer issue. Call",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "1912"
								}),
								" or WhatsApp",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "94987 94987"
								}),
								" and keep the complaint number."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "3."
								}),
								" If it is a weekday morning and the cut started around 09:00, it is very likely planned maintenance. See",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "text-primary underline underline-offset-4",
									to: "/shutdown/today",
									children: "today's shutdown page"
								}),
								"."
							] })
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Start here",
			lead: "The four things people search for most, in one place.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						meta: "Shutdown",
						title: "Today's power cut",
						to: "/shutdown/today",
						children: "How to confirm a shutdown scheduled for today and what the notice actually means."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						meta: "Shutdown",
						title: "Tomorrow's power cut",
						to: "/shutdown/tomorrow",
						children: "Plan ahead: when notices are published and how to prepare a household or shop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						meta: "Districts",
						title: "All 38 districts",
						to: "/districts",
						children: "Circle names, major towns and local shutdown patterns for every district."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						meta: "Tools",
						title: "TNEB bill calculator",
						to: "/tneb-bill-calculator",
						children: "Slab-wise domestic bill estimate with fixed charges for a bi-monthly cycle."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Planned shutdown or fault?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Almost every question we get comes down to this distinction. It decides where the information will be published and who you should contact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold",
								children: "Planned shutdown"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Announced in advance by the section or circle office." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Usually a fixed window such as 09:00–14:00 on a working day." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Caused by line maintenance, tree cutting, transformer or meter work." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Published on the TNPDCL outage portal and in local newspapers." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border bg-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold",
								children: "Unplanned fault"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No advance notice anywhere — it cannot be predicted." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Starts suddenly, often during rain, wind or peak load." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Caused by tree contact, cable faults, blown fuses or lightning." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Report on 1912; restoration time depends on the crew and the fault." })
								]
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: "Guides written for Tamil Nadu consumers",
			lead: "Practical, checked and updated — no copied press releases.",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: guides.slice(0, 6).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					meta: g.category,
					title: g.title,
					to: `/guides/${g.slug}`,
					children: g.description
				}, g.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					className: "text-sm font-semibold text-primary underline underline-offset-4",
					to: "/guides",
					children: "See all guides →"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Popular districts",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/districts/$slug",
					params: { slug: d.slug },
					className: "rounded-full border bg-card px-3 py-1.5 text-sm hover:bg-muted",
					children: d.name
				}, d.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Frequently asked questions",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs: homeFaqs })
		})
	] });
}
//#endregion
export { Home as component };
