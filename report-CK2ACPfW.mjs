import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Section, n as FaqList, r as Prose } from "./ui-bits-BaemK1C6.mjs";
import { i as PageHero, n as OfficialLinks, r as Page, t as Callout } from "./site-layout-C82Xm6vR.mjs";
import { t as faqs } from "./report-arey_okz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/report-CK2ACPfW.js
var import_jsx_runtime = require_jsx_runtime();
function Report() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Faults",
			title: "Report a power cut",
			lead: "We do not restore supply and we cannot log complaints for you. This page shows the official channels and how to use them so your complaint reaches the right crew quickly."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Official complaint numbers" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1912" }), " — national electricity complaint number, routed to TNPDCL in Tamil Nadu."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "94987 94987" }), " — TNPDCL minnagam helpline, works for calls and SMS."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your section office number, printed on the electricity bill." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Before you call, check that it is a fault" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"If the outage was announced in advance it is planned maintenance and the helpline cannot shorten it. Check the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shutdown/today",
						children: "today's shutdown page"
					}),
					" first. If nothing is listed for your section and the supply is off, it is a fault worth reporting."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Also rule out a problem inside your own installation. If neighbours have supply and you do not, check your main switch, your ELCB or RCCB, and the service fuse. A tripped RCCB usually means a leakage fault in your wiring, which is work for a licensed electrician rather than the board." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What to say" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Service connection number, exactly as printed on the bill." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Section name and district." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Street name plus a landmark that a crew can find at night." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nearest pole number, if a numbered pole is visible." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Whether the whole street is affected or only your building." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Anything visible: sparking, a snapped conductor, a leaning pole, smoke." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Safety while you wait" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Stay at least ten metres away from any fallen conductor and keep children and animals away. Do not attempt to move a fallen line, even with a wooden pole. Switch off heavy appliances at the socket so the restoration surge does not damage them, and leave one light switched on so you can tell when supply returns." })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
					title: "Emergency",
					children: "For a fallen live wire, sparking transformer or electrical fire, call 1912 immediately, and 101 for fire services. Do not wait for an online complaint to be processed."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display font-bold",
						children: "Official links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLinks, {})
					})]
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Reporting FAQ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { faqs })
		})
	] });
}
//#endregion
export { Report as component };
