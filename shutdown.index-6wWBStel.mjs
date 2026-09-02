import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as ShutdownLive } from "./shutdown-live-fIjVw5qw.mjs";
import { t as faqs } from "./shutdown.index-BLPZ_3Rm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shutdown.index-6wWBStel.js
var import_jsx_runtime = require_jsx_runtime();
function ShutdownIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Power shutdown",
			title: "How planned power shutdowns work in Tamil Nadu",
			lead: "Planned shutdowns are scheduled maintenance windows, published in advance by the distribution circle. This page explains the system so you can find the notice that applies to your street."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShutdownLive, { heading: "Latest Tamil Nadu shutdown announcements" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Who decides on a shutdown" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Distribution in Tamil Nadu is handled by TNPDCL, the distribution company carved out of TANGEDCO. The state is divided into regions, regions into distribution circles, circles into divisions, divisions into sections. The section office is the unit that physically switches your feeder off, but the notice is normally issued at circle level, which is why notices list section names rather than street names." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What triggers a planned shutdown" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Replacing or repairing distribution transformers and their protection gear." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tree trimming along 11 kV lines, especially before the north-east monsoon." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Insulator cleaning in coastal districts where salt deposits cause flashover." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shifting or restringing lines for road widening and other civil works." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Connecting a new substation, feeder or high-tension consumer to the network." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How to read a shutdown notice" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A typical notice gives the date, a start and end time, the substation or feeder name, and a list of areas served. The list is written from the switching engineer's point of view, so it names sections, feeders and landmark localities. The single most useful detail you can keep to hand is the name of your section office, which is printed on your electricity bill near the service connection number. Once you know it, scanning a notice takes seconds." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Timing in practice" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most windows are booked from 09:00 to 14:00 or 09:00 to 17:00 on a working day, when domestic load is at its lowest. Crews aim to finish early, and supply is often restored before the stated end time. Treat the end time as the outer limit rather than a prediction. Industrial belts such as Tiruppur, Hosur and Sivakasi are more often scheduled on Sundays to reduce production loss." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What to do when your area is listed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Charge phones, power banks, inverters and laptops the night before." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fill water storage if your building depends on an electric pump." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Set the refrigerator colder in advance and keep the door closed all day." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Switch off and unplug air conditioners, computers and motors before the window." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tell elderly neighbours and anyone using medical equipment at home." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "When there is no notice at all" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If the power went out without warning, it is a fault. Faults are not published anywhere in advance because nobody knew they were coming. Report on 1912 with your service connection number, note the complaint reference, and check whether the outage is limited to your house — a tripped ELCB or a blown service fuse looks exactly like an area outage from inside the house." })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
						title: "Check the official portal",
						children: "We are an independent guide. Every shutdown notice originates with TNPDCL, and their portal is always the authoritative source."
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
							children: "Go deeper"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "text-primary underline underline-offset-4",
									to: "/shutdown/today",
									children: "Today's shutdown"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "text-primary underline underline-offset-4",
									to: "/shutdown/tomorrow",
									children: "Tomorrow's shutdown"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "text-primary underline underline-offset-4",
									to: "/districts",
									children: "District directory"
								}) })
							]
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Shutdown FAQ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs })
		})
	] });
}
//#endregion
export { ShutdownIndex as component };
