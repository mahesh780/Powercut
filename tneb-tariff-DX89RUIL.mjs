import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as faqs } from "./tneb-tariff-kdEJyaOt.mjs";
import { i as slabsUpTo500, r as slabsAbove500 } from "./tariff-BML_mBEq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tneb-tariff-DX89RUIL.js
var import_jsx_runtime = require_jsx_runtime();
function SlabTable({ slabs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 text-left font-semibold",
					children: "Slab (bi-monthly units)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 text-right font-semibold",
					children: "Rate per unit"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: slabs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2",
					children: s.to === null ? `Above ${s.from}` : `${s.from + 1} – ${s.to}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2 text-right",
					children: s.rate === 0 ? "Free" : `₹${s.rate.toFixed(2)}`
				})]
			}, `${s.from}-${s.to}`)) })]
		})
	});
}
function Tariff() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Reference",
			title: "TNEB domestic tariff slabs",
			lead: "The published slab structure for domestic (LT Tariff IA) connections in Tamil Nadu, with the fixed charges that sit on top of the energy charge."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Consumption up to 500 units in a cycle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Applies when the two-month total is 500 units or less."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlabTable, { slabs: slabsUpTo500 })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Consumption above 500 units in a cycle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Once the cycle total crosses 500 units, this structure replaces the one above and the first 100 units are no longer free."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlabTable, { slabs: slabsAbove500 })
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: "Fixed charges (bi-monthly)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-xl border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Consumption band"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-right font-semibold",
									children: "Fixed charge"
								})] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
								["Up to 500 units", "₹30"],
								["501 – 600 units", "₹60"],
								["601 – 800 units", "₹80"],
								["801 – 1000 units", "₹100"],
								["Above 1000 units", "₹150"]
							].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: a
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: b
								})]
							}, a)) })]
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Why the two structures matter" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The jump at 500 units is a cliff, not a step. A household that ends a cycle at 495 units pays for only 395 chargeable units at low rates. The same household at 510 units pays for all 510 units, starting at a higher opening rate. The difference in rupees is far larger than the fifteen extra units suggest." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If your consumption sits close to the boundary, the practical response is to track the meter mid-cycle rather than waiting for the bill. Note the reading on the same date each month and you will know weeks in advance whether you are heading over the line." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Try the numbers yourself in the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tneb-bill-calculator",
								children: "TNEB bill calculator"
							}),
							", or read",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/guides/$slug",
								params: { slug: "understand-tneb-tariff-slabs" },
								children: "the full slab explainer"
							}),
							"."
						] })
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
					title: "Verify before you rely on it",
					children: "Tariff orders change. These figures are reproduced for reference; the current TNERC tariff order and your TNPDCL bill are authoritative."
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Tariff FAQ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs })
		})
	] });
}
//#endregion
export { Tariff as component };
