import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as faqs } from "./tneb-bill-calculator-DxjT2DYO.mjs";
import { n as calculateBill, t as applianceWatts } from "./tariff-BML_mBEq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tneb-bill-calculator-DMFeeBw1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rupees = (n) => "₹" + n.toLocaleString("en-IN", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
function Calculator() {
	const [units, setUnits] = (0, import_react.useState)(350);
	const result = (0, import_react.useMemo)(() => calculateBill(units), [units]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Tool",
			title: "TNEB bill calculator",
			lead: "Enter the units shown on your bi-monthly TNPDCL bill and see exactly how the amount is built up, slab by slab."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "units",
						className: "text-sm font-semibold",
						children: "Units consumed in the two-month cycle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "units",
						type: "number",
						min: 0,
						value: units,
						onChange: (e) => setUnits(Math.max(0, Number(e.target.value) || 0)),
						className: "mt-2 w-full rounded-md border bg-background px-3 py-2 text-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Units slider",
						type: "range",
						min: 0,
						max: 1500,
						step: 10,
						value: Math.min(units, 1500),
						onChange: (e) => setUnits(Number(e.target.value)),
						className: "mt-4 w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							100,
							200,
							350,
							500,
							600,
							800,
							1e3
						].map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setUnits(u),
							className: "rounded-full border px-3 py-1 text-xs font-medium hover:bg-muted",
							children: [u, " units"]
						}, u))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto rounded-lg border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "Slab"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "Units"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "Rate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "Amount"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
								result.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: l.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-right",
											children: l.units
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-3 py-2 text-right",
											children: ["₹", l.rate.toFixed(2)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 text-right",
											children: rupees(l.amount)
										})
									]
								}, l.label)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										colSpan: 3,
										children: "Energy charge"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-right",
										children: rupees(result.energyCharge)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										colSpan: 3,
										children: "Fixed charge (bi-monthly)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-right",
										children: rupees(result.fixedCharge)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t bg-muted font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										colSpan: 3,
										children: "Estimated total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-right",
										children: rupees(result.total)
									})]
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							"Effective cost: ",
							rupees(result.perUnit),
							" per unit",
							result.subsidyUnits > 0 && ` · ${result.subsidyUnits} free units applied`
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
					title: "Estimate only",
					children: "This calculator uses published domestic (LT-IA) slab rates. Arrears, adjustments and non-domestic categories are not included. The bill issued by TNPDCL is final."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How the calculation works" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tamil Nadu domestic connections are billed once every two months. The slab rates are applied to the total units of that whole cycle, and the structure changes entirely depending on whether you stay at or below 500 units." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Below 500 units, the first 100 units are free and the remaining units are charged at progressively higher rates. Above 500 units, every unit is charged, starting from the first one. This is the single most misunderstood part of a TNEB bill and it is why a household hovering near the boundary should watch consumption closely towards the end of a cycle." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A fixed charge is added on top, scaled to the consumption band. It is charged whether or not you used electricity, because it covers the cost of maintaining the connection." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"For a full explanation, read",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/guides/$slug",
							params: { slug: "how-tneb-bills-are-calculated" },
							children: "how TNEB bills are calculated"
						}),
						" ",
						"or the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tneb-tariff",
							children: "tariff slab reference"
						}),
						"."
					] })
				] })]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Appliance running cost",
			lead: "Rough units per month for common household appliances, assuming daily use. Multiply by your effective per-unit cost above to estimate the rupee impact.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Appliance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right font-semibold",
								children: "Watts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right font-semibold",
								children: "Units / month at 4 h a day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right font-semibold",
								children: "Cost / month"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: applianceWatts.map((a) => {
						const u = a.watts * 4 * 30 / 1e3;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: a.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: a.watts
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: u.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: rupees(u * (result.perUnit || 6))
								})
							]
						}, a.name);
					}) })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Bill calculator FAQ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs })
		})
	] });
}
//#endregion
export { Calculator as component };
