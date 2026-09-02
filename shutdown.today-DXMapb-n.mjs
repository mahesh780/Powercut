import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
import { t as ShutdownLive } from "./shutdown-live-fIjVw5qw.mjs";
import { t as faqs } from "./shutdown.today-D668rSSa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shutdown.today-DXMapb-n.js
var import_jsx_runtime = require_jsx_runtime();
function Today() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Today",
			title: "Power shutdown in Tamil Nadu today",
			lead: "A two-minute check that tells you whether the cut on your street was planned, who to call if it wasn't, and when supply is likely to return."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShutdownLive, {
			windowHours: 48,
			heading: "Today's shutdown announcements"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Step 1 — Find your section name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Take out your latest TNPDCL bill. Near the service connection number you will find a section name, and above it a distribution circle. Shutdown notices are indexed by those two names, never by street. Save them in your phone notes; you will use them every time." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Step 2 — Open today's notice list" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Go to the TNPDCL outage portal and select your circle. Notices for the current date appear with a start time, an end time and the affected feeders. If your section is not listed, no planned work is scheduled for you today." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Step 3 — If nothing is listed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Then this is an unplanned fault. Before calling, rule out a problem inside your own installation: check whether the neighbours have supply, look at your main switch and ELCB, and check whether only one phase is missing (some lights work, motors do not). If the street is affected, call 1912, give your service connection number and note the complaint number." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Typical restoration times" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Blown service fuse at your own pole: 30 minutes to 2 hours." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feeder trip from a passing fault: often auto-restored within minutes." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cable or overhead line fault: 2 to 6 hours, longer at night or in rain." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Distribution transformer failure: 4 to 24 hours, depending on spare availability." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cyclone or heavy storm damage: can extend across a full day or more." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Getting through the outage" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keep the refrigerator door shut — a full fridge holds safe temperature for roughly four hours untouched. Switch off air conditioners and pumps at the socket so they do not all restart together when supply returns, which is a common cause of a second trip. If you run an inverter, plan for fans and lights only; running a pump or iron off it will flatten the battery long before the window ends." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "If the outage is unusually long" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Call 1912 again and quote the original complaint number rather than raising a new one, which resets your place in the queue. For a persistent problem affecting the whole street across several days, a written complaint to the section office creates a record you can escalate to the divisional engineer." })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
						title: "We do not publish live outage data",
						children: "This site explains and organises TNPDCL information. For the authoritative list of notices for today, always use the official portal below."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-bold",
							children: "Official sources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLinks, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold",
								children: "Jump to your district"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: districts.slice(0, 12).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/districts/$slug",
									params: { slug: d.slug },
									className: "rounded-full border px-3 py-1 text-xs hover:bg-muted",
									children: d.name
								}, d.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "mt-3 inline-block text-sm font-semibold text-primary underline underline-offset-4",
								to: "/districts",
								children: "All districts →"
							})
						]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Today's shutdown FAQ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs })
		})
	] });
}
//#endregion
export { Today as component };
