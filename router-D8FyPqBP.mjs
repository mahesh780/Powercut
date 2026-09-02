import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as breadcrumbSchema, o as faqSchema } from "./ui-bits-BaemK1C6.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$19 } from "./districts._slug-C5M1Kihs.mjs";
import { t as faqs } from "./faq-Bdo1Z-qC.mjs";
import { n as guides } from "./guides-BRogxE4k.mjs";
import { t as Route$20 } from "./guides._slug-B82lW9T7.mjs";
import { t as faqs$1 } from "./report-arey_okz.mjs";
import { t as homeFaqs } from "./routes-EG_YLRsG.mjs";
import { t as faqs$2 } from "./tneb-bill-calculator-DxjT2DYO.mjs";
import { t as faqs$3 } from "./tneb-tariff-kdEJyaOt.mjs";
import { t as faqs$4 } from "./shutdown.index-BLPZ_3Rm.mjs";
import { t as faqs$5 } from "./shutdown.today-D668rSSa.mjs";
import { t as faqs$6 } from "./shutdown.tomorrow-B0Q-QKdw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D8FyPqBP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D-7CxIae.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page doesn't exist. Try the district list or today's shutdown page instead."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/districts",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium",
						children: "All districts"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TNEB Power Cut — Tamil Nadu Power Shutdown Information" },
			{
				name: "description",
				content: "Independent Tamil Nadu power shutdown information, TNEB tariff reference, bill calculator and electricity guides for all 38 districts."
			},
			{
				property: "og:site_name",
				content: "TNEB Power Cut"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "TNEB Power Cut",
				alternateName: "tnebpowercut.in",
				url: "https://tnebpowercut.in/",
				description: "Independent Tamil Nadu power shutdown information, electricity tariff reference and consumer guides.",
				inLanguage: "en-IN"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$16 = () => import("./routes-BiBhrYk5.mjs");
var Route$17 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "TNEB Power Cut — Tamil Nadu Power Shutdown & TNEB Bill Info" },
			{
				name: "description",
				content: "Check today's and tomorrow's planned power shutdown in Tamil Nadu district by district, estimate your TNEB bill, and read plain-English guides to tariffs, outages and safety."
			},
			{
				property: "og:title",
				content: "TNEB Power Cut — Tamil Nadu Power Shutdown & TNEB Bill Info"
			},
			{
				property: "og:description",
				content: "Planned power shutdown information for all 38 Tamil Nadu districts, a TNEB bill calculator and practical electricity guides."
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(homeFaqs))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./about-DkX7qZMB.mjs");
var Route$16 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About TNEB Power Cut — Independent Tamil Nadu Electricity Information" },
			{
				name: "description",
				content: "Who runs TNEB Power Cut, why the site exists, how we research Tamil Nadu power shutdown and TNEB tariff information, and what we deliberately do not do."
			},
			{
				property: "og:title",
				content: "About TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "An independent Tamil Nadu electricity information service covering shutdowns, tariffs and consumer guides."
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./contact-gy27wPL_.mjs");
var Route$15 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact TNEB Power Cut — Corrections, Feedback and Enquiries" },
			{
				name: "description",
				content: "How to reach TNEB Power Cut for corrections, feedback or content enquiries, and where to go instead for TNPDCL outage complaints and billing issues."
			},
			{
				property: "og:title",
				content: "Contact TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "Corrections, feedback and enquiries for the TNEB Power Cut information service."
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./data-sources-DqFFph7k.mjs");
var Route$14 = createFileRoute("/data-sources")({
	head: () => ({
		meta: [
			{ title: "Data Sources — Where TNEB Power Cut Information Comes From" },
			{
				name: "description",
				content: "The official sources behind our Tamil Nadu shutdown, tariff and billing information, including TNPDCL outage notices and TNERC tariff orders, and their known limits."
			},
			{
				property: "og:title",
				content: "Data Sources — TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "Official TNPDCL and TNERC sources used for our Tamil Nadu electricity information, and their limitations."
			},
			{
				property: "og:url",
				content: "/data-sources"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/data-sources"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./disclaimer-DzGu6amL.mjs");
var Route$13 = createFileRoute("/disclaimer")({
	head: () => ({
		meta: [
			{ title: "Disclaimer — TNEB Power Cut Is Not TNEB or TNPDCL" },
			{
				name: "description",
				content: "TNEB Power Cut is an independent website with no affiliation to TNEB, TANGEDCO, TNPDCL or TNERC. Read the limits of our outage, tariff and safety information."
			},
			{
				property: "og:title",
				content: "Disclaimer — TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "An independent site, not affiliated with TNEB or TNPDCL. Limits of our outage and tariff information."
			},
			{
				property: "og:url",
				content: "/disclaimer"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/disclaimer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./editorial-policy-B-SQ3Kij.mjs");
var Route$12 = createFileRoute("/editorial-policy")({
	head: () => ({
		meta: [
			{ title: "Editorial Policy — How TNEB Power Cut Researches and Reviews Content" },
			{
				name: "description",
				content: "Our editorial standards: how Tamil Nadu electricity content is researched, sourced, reviewed and corrected, and how advertising is kept separate from editorial."
			},
			{
				property: "og:title",
				content: "Editorial Policy — TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "How TNEB Power Cut researches, reviews and corrects its electricity content."
			},
			{
				property: "og:url",
				content: "/editorial-policy"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/editorial-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./faq-Ba7VXhqs.mjs");
var Route$11 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "Tamil Nadu Power Cut FAQ — TNEB Shutdown & Billing Questions" },
			{
				name: "description",
				content: "Answers to common questions about Tamil Nadu power cuts, TNPDCL planned shutdowns, complaint numbers, TNEB bill slabs and how to check outages in your area."
			},
			{
				property: "og:title",
				content: "Tamil Nadu Power Cut FAQ"
			},
			{
				property: "og:description",
				content: "Common questions about TNEB power shutdowns, outage reporting and electricity billing in Tamil Nadu."
			},
			{
				property: "og:url",
				content: "/faq"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-policy-DT1M1Fp8.mjs");
var Route$10 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy — TNEB Power Cut" },
			{
				name: "description",
				content: "How TNEB Power Cut handles visitor data, cookies and third-party advertising, including Google AdSense, analytics and your choices over personalised ads."
			},
			{
				property: "og:title",
				content: "Privacy Policy — TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "How we handle visitor data, cookies and third-party advertising."
			},
			{
				property: "og:url",
				content: "/privacy-policy"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./report-CK2ACPfW.mjs");
var Route$9 = createFileRoute("/report")({
	head: () => ({
		meta: [
			{ title: "Report a Power Cut in Tamil Nadu — TNEB Complaint Numbers" },
			{
				name: "description",
				content: "How to report an unplanned power cut in Tamil Nadu: TNPDCL helpline numbers, what details to keep ready, and what to expect after you register a complaint."
			},
			{
				property: "og:title",
				content: "Report a Power Cut in Tamil Nadu"
			},
			{
				property: "og:description",
				content: "TNEB complaint numbers and the exact details to give when reporting an outage in Tamil Nadu."
			},
			{
				property: "og:url",
				content: "/report"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/report"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$1))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var staticPaths = [
	{
		path: "/",
		priority: "1.0",
		freq: "daily"
	},
	{
		path: "/shutdown",
		priority: "0.8",
		freq: "weekly"
	},
	{
		path: "/shutdown/today",
		priority: "0.9",
		freq: "daily"
	},
	{
		path: "/shutdown/tomorrow",
		priority: "0.9",
		freq: "daily"
	},
	{
		path: "/districts",
		priority: "0.8",
		freq: "weekly"
	},
	{
		path: "/guides",
		priority: "0.8",
		freq: "weekly"
	},
	{
		path: "/tneb-bill-calculator",
		priority: "0.9",
		freq: "monthly"
	},
	{
		path: "/tneb-tariff",
		priority: "0.8",
		freq: "monthly"
	},
	{
		path: "/report",
		priority: "0.7",
		freq: "monthly"
	},
	{
		path: "/faq",
		priority: "0.6",
		freq: "monthly"
	},
	{
		path: "/about",
		priority: "0.4",
		freq: "yearly"
	},
	{
		path: "/contact",
		priority: "0.4",
		freq: "yearly"
	},
	{
		path: "/editorial-policy",
		priority: "0.3",
		freq: "yearly"
	},
	{
		path: "/data-sources",
		priority: "0.3",
		freq: "yearly"
	},
	{
		path: "/privacy-policy",
		priority: "0.3",
		freq: "yearly"
	},
	{
		path: "/terms",
		priority: "0.3",
		freq: "yearly"
	},
	{
		path: "/disclaimer",
		priority: "0.3",
		freq: "yearly"
	}
];
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: ({ request }) => {
	const origin = new URL(request.url).origin;
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		...staticPaths.map((s) => ({
			loc: s.path,
			priority: s.priority,
			freq: s.freq
		})),
		...districts.map((d) => ({
			loc: `/districts/${d.slug}`,
			priority: "0.7",
			freq: "weekly"
		})),
		...guides.map((g) => ({
			loc: `/guides/${g.slug}`,
			priority: "0.7",
			freq: "monthly"
		}))
	].map((u) => `  <url><loc>${origin}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>`;
	return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
} } } });
var $$splitComponentImporter$7 = () => import("./terms-gf-V7eLv.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Use — TNEB Power Cut" },
			{
				name: "description",
				content: "The terms that govern use of the TNEB Power Cut website, including acceptable use, accuracy limits, intellectual property and liability."
			},
			{
				property: "og:title",
				content: "Terms of Use — TNEB Power Cut"
			},
			{
				property: "og:description",
				content: "Terms governing use of the TNEB Power Cut website."
			},
			{
				property: "og:url",
				content: "/terms"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./tneb-bill-calculator-DMFeeBw1.mjs");
var Route$6 = createFileRoute("/tneb-bill-calculator")({
	head: () => ({
		meta: [
			{ title: "TNEB Bill Calculator 2026 — Estimate Your Tamil Nadu Electricity Bill" },
			{
				name: "description",
				content: "Free TNEB bill calculator for Tamil Nadu domestic consumers. Enter your bi-monthly units to see a slab-wise breakdown, fixed charges and estimated total in rupees."
			},
			{
				property: "og:title",
				content: "TNEB Bill Calculator — Tamil Nadu Electricity Bill"
			},
			{
				property: "og:description",
				content: "Estimate your bi-monthly TNEB electricity bill with a slab-wise breakdown of energy and fixed charges."
			},
			{
				property: "og:url",
				content: "/tneb-bill-calculator"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tneb-bill-calculator"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$2))
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebApplication",
				name: "TNEB Bill Calculator",
				applicationCategory: "FinanceApplication",
				operatingSystem: "Web",
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "INR"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./tneb-tariff-DX89RUIL.mjs");
var Route$5 = createFileRoute("/tneb-tariff")({
	head: () => ({
		meta: [
			{ title: "TNEB Tariff Slabs 2026 — Domestic Electricity Rates in Tamil Nadu" },
			{
				name: "description",
				content: "Domestic TNEB tariff slab rates for Tamil Nadu with bi-monthly bands, per-unit rupee rates and fixed charges, explained in plain language with worked examples."
			},
			{
				property: "og:title",
				content: "TNEB Domestic Tariff Slabs in Tamil Nadu"
			},
			{
				property: "og:description",
				content: "Slab-wise TNEB domestic electricity rates and fixed charges for Tamil Nadu, with worked examples."
			},
			{
				property: "og:url",
				content: "/tneb-tariff"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tneb-tariff"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$3))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./districts.index-BXj5lGUT.mjs");
var Route$4 = createFileRoute("/districts/")({
	head: () => ({
		meta: [
			{ title: "Power Shutdown by District — All 38 Tamil Nadu Districts" },
			{
				name: "description",
				content: "Find planned TNEB power shutdown information for every Tamil Nadu district, with the distribution circle, main towns and local outage notes for each area."
			},
			{
				property: "og:title",
				content: "Power Shutdown by District in Tamil Nadu"
			},
			{
				property: "og:description",
				content: "District-wise TNPDCL power shutdown guidance covering all 38 districts of Tamil Nadu."
			},
			{
				property: "og:url",
				content: "/districts"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/districts"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				url: "/"
			}, {
				name: "Districts",
				url: "/districts"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./guides.index-6SYV2nEh.mjs");
var Route$3 = createFileRoute("/guides/")({
	head: () => ({
		meta: [
			{ title: "TNEB Electricity Guides — Bills, Tariff, Shutdowns & Safety" },
			{
				name: "description",
				content: "Plain-language guides to Tamil Nadu electricity: how TNEB bills are calculated, tariff slabs explained, planned shutdowns, saving units and outage safety."
			},
			{
				property: "og:title",
				content: "TNEB Electricity Guides for Tamil Nadu Consumers"
			},
			{
				property: "og:description",
				content: "Practical guides on TNEB billing, tariff slabs, planned power shutdowns and electrical safety in Tamil Nadu."
			},
			{
				property: "og:url",
				content: "/guides"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/guides"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				url: "/"
			}, {
				name: "Guides",
				url: "/guides"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./shutdown.index-6wWBStel.mjs");
var Route$2 = createFileRoute("/shutdown/")({
	head: () => ({
		meta: [
			{ title: "TNEB Power Shutdown in Tamil Nadu — How Notices Work" },
			{
				name: "description",
				content: "Understand how TNPDCL plans and publishes power shutdowns in Tamil Nadu: where notices appear, how much notice you get, and how to read a shutdown notice correctly."
			},
			{
				property: "og:title",
				content: "TNEB Power Shutdown in Tamil Nadu — How Notices Work"
			},
			{
				property: "og:description",
				content: "Where TNPDCL publishes planned shutdown notices, how to read them, and what to do when your area is affected."
			},
			{
				property: "og:url",
				content: "/shutdown"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shutdown"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$4))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./shutdown.today-DXMapb-n.mjs");
var Route$1 = createFileRoute("/shutdown/today")({
	head: () => ({
		meta: [
			{ title: "Today's Power Shutdown in Tamil Nadu — TNEB Power Cut Check" },
			{
				name: "description",
				content: "Check whether today's power cut in your Tamil Nadu area is a planned TNPDCL shutdown or a fault, how to confirm it in under two minutes, and what to do during the outage."
			},
			{
				property: "og:title",
				content: "Today's Power Shutdown in Tamil Nadu"
			},
			{
				property: "og:description",
				content: "How to confirm today's planned TNEB power shutdown for your section, and what to do if it is actually a fault."
			},
			{
				property: "og:url",
				content: "/shutdown/today"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shutdown/today"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$5))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./shutdown.tomorrow-CfZ_fhOm.mjs");
var Route = createFileRoute("/shutdown/tomorrow")({
	head: () => ({
		meta: [
			{ title: "Tomorrow's Power Shutdown in Tamil Nadu — Plan Ahead" },
			{
				name: "description",
				content: "When TNPDCL publishes tomorrow's planned shutdown notices, how to check whether your section is affected, and a practical checklist for homes, shops and small units."
			},
			{
				property: "og:title",
				content: "Tomorrow's Power Shutdown in Tamil Nadu"
			},
			{
				property: "og:description",
				content: "Check tomorrow's planned TNEB shutdown for your area and prepare with a practical household and business checklist."
			},
			{
				property: "og:url",
				content: "/shutdown/tomorrow"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shutdown/tomorrow"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqSchema(faqs$6))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var DataSourcesRoute = Route$14.update({
	id: "/data-sources",
	path: "/data-sources",
	getParentRoute: () => Route$18
});
var DisclaimerRoute = Route$13.update({
	id: "/disclaimer",
	path: "/disclaimer",
	getParentRoute: () => Route$18
});
var EditorialPolicyRoute = Route$12.update({
	id: "/editorial-policy",
	path: "/editorial-policy",
	getParentRoute: () => Route$18
});
var FaqRoute = Route$11.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$18
});
var PrivacyPolicyRoute = Route$10.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$18
});
var ReportRoute = Route$9.update({
	id: "/report",
	path: "/report",
	getParentRoute: () => Route$18
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$18
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$18
});
var TnebBillCalculatorRoute = Route$6.update({
	id: "/tneb-bill-calculator",
	path: "/tneb-bill-calculator",
	getParentRoute: () => Route$18
});
var TnebTariffRoute = Route$5.update({
	id: "/tneb-tariff",
	path: "/tneb-tariff",
	getParentRoute: () => Route$18
});
var DistrictsIndexRoute = Route$4.update({
	id: "/districts/",
	path: "/districts/",
	getParentRoute: () => Route$18
});
var DistrictsSlugRoute = Route$19.update({
	id: "/districts/$slug",
	path: "/districts/$slug",
	getParentRoute: () => Route$18
});
var GuidesIndexRoute = Route$3.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$18
});
var GuidesSlugRoute = Route$20.update({
	id: "/guides/$slug",
	path: "/guides/$slug",
	getParentRoute: () => Route$18
});
var ShutdownIndexRoute = Route$2.update({
	id: "/shutdown/",
	path: "/shutdown/",
	getParentRoute: () => Route$18
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	DataSourcesRoute,
	DisclaimerRoute,
	EditorialPolicyRoute,
	FaqRoute,
	PrivacyPolicyRoute,
	ReportRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	TnebBillCalculatorRoute,
	TnebTariffRoute,
	DistrictsSlugRoute,
	GuidesSlugRoute,
	ShutdownTodayRoute: Route$1.update({
		id: "/shutdown/today",
		path: "/shutdown/today",
		getParentRoute: () => Route$18
	}),
	ShutdownTomorrowRoute: Route.update({
		id: "/shutdown/tomorrow",
		path: "/shutdown/tomorrow",
		getParentRoute: () => Route$18
	}),
	DistrictsIndexRoute,
	GuidesIndexRoute,
	ShutdownIndexRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
