import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, o as faqSchema, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
import { t as ShutdownLive } from "./shutdown-live-fIjVw5qw.mjs";
import { t as Route } from "./districts._slug-C5M1Kihs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/districts._slug-DvnzOMlp.js
var import_jsx_runtime = require_jsx_runtime();
function DistrictPage() {
	const { district: d } = Route.useLoaderData();
	const faqs = [
		{
			q: `Is there a power cut in ${d.name} today?`,
			a: `Planned shutdowns for ${d.name} are published under the ${d.circle} heading on the TNPDCL outage portal. If your area is not listed and the supply is off, it is an unplanned fault — report it on 1912 or 94987 94987.`
		},
		{
			q: `What time do planned shutdowns usually happen in ${d.name}?`,
			a: "Most maintenance windows run between 09:00 and 14:00 or 10:00 and 15:00 on working days. Industrial feeders are often taken up on Sundays instead."
		},
		{
			q: `How do I find my section office in ${d.name}?`,
			a: "The section name and distribution circle are printed on your TNPDCL bill near the service connection number. Shutdown notices are indexed by section, not by street address."
		}
	];
	const others = districts.filter((x) => x.region === d.region && x.slug !== d.slug).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: `${d.region} region`,
			title: `Power shutdown in ${d.name} district`,
			lead: `${d.circle}. Use this page to confirm whether today's outage in ${d.name} is planned maintenance or a fault, and to prepare for the next scheduled shutdown.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShutdownLive, {
			districtSlug: d.slug,
			heading: `${d.name} shutdown updates`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["How shutdowns are notified in ", d.name] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d.note }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"TNPDCL publishes planned shutdown notices circle by circle. For ",
					d.name,
					" the relevant heading is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: d.circle }),
					". Each entry names the substation or feeder being worked on, lists the affected areas in shorthand, and gives a start and expected restoration time. Because the shorthand uses feeder names rather than street names, the quickest way to be certain is to match the section name printed on your bill."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Main towns and areas covered" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: d.towns.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t)) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Common pincodes in this district include ",
					d.pincodes.join(", "),
					". Neighbouring sections sometimes share an 11 kV feeder, so a shutdown listed for an adjacent area can still affect your street for part of the window."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Before the shutdown window" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Charge phones, power banks and inverter batteries the night before." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fill water storage if your building depends on an electric pump." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Chill the refrigerator further and keep the door closed throughout." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Unplug air conditioners, geysers and computers to avoid restoration surges." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "If the supply is off and nothing is listed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"That is an unplanned fault. Call ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1912" }),
					" or the TNPDCL helpline",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "94987 94987" }),
					" and give your service connection number along with the nearest pole number. In ",
					d.name,
					", storm damage and tree contact are the most common causes of sudden outages, and restoration in outlying sections can take longer than in the town area."
				] })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
						title: "Always confirm officially",
						children: [
							"We are an independent information service. Timings on the official portal are the only authoritative source for ",
							d.name,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-bold",
							children: "Official links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLinks, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-bold",
							children: "Nearby districts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/districts/$slug",
								params: { slug: o.slug },
								className: "text-primary underline underline-offset-4",
								children: [o.name, " power shutdown"]
							}) }, o.slug))
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			title: `${d.name} power cut — frequently asked questions`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema(faqs)) }
			})]
		})
	] });
}
//#endregion
export { DistrictPage as component };
