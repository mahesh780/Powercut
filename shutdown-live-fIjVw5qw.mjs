import { n as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { E as isRedirect, g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CUXBUjEI.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as districts } from "./districts-CWA60NWn.mjs";
import { t as formatWhen } from "./shutdown-types-BqUQWFJ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shutdown-live-fIjVw5qw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Official TNEB CPRO shutdown page (Chennai region press releases). */
var getShutdownFeed = createServerFn({ method: "GET" }).handler(createSsrRpc("73c3b00b00b30ff89c72ce467aa6f1e81616a0a130b75690ab1f5bc3fbb70643"));
function ShutdownLive({ districtSlug, windowHours, heading = "Live shutdown updates", showFilters = true, limit = 30 }) {
	const fetchFeed = useServerFn(getShutdownFeed);
	const { data, isLoading, isError, refetch, isFetching } = useQuery({
		queryKey: ["shutdown-feed"],
		queryFn: () => fetchFeed(),
		staleTime: 6e5,
		refetchOnWindowFocus: true
	});
	const [q, setQ] = (0, import_react.useState)("");
	const [district, setDistrict] = (0, import_react.useState)(districtSlug ?? "");
	const notices = (0, import_react.useMemo)(() => {
		let list = data?.notices ?? [];
		const slug = districtSlug ?? district;
		if (slug) list = list.filter((n) => n.districtSlugs.includes(slug));
		if (typeof windowHours === "number") {
			const cutoff = Date.now() - windowHours * 3600 * 1e3;
			list = list.filter((n) => new Date(n.publishedAt).getTime() >= cutoff);
		}
		if (q.trim()) {
			const needle = q.trim().toLowerCase();
			list = list.filter((n) => `${n.title} ${n.summary} ${n.places.join(" ")}`.toLowerCase().includes(needle));
		}
		return list.slice(0, limit);
	}, [
		data,
		district,
		districtSlug,
		windowHours,
		q,
		limit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "wrap py-12",
		id: "live-updates",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold sm:text-3xl",
					children: heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Collected automatically every 15 minutes from the TNEB/TNPDCL shutdown press page and Tamil Nadu newspaper announcements, then matched to districts and towns. Always confirm with your section office before planning around a notice."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => refetch(),
					className: "rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted",
					children: isFetching ? "Refreshing…" : "Refresh"
				})]
			}),
			showFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search your town, city or area…",
					"aria-label": "Search town, city or area",
					className: "rounded-lg border bg-background px-3 py-2 text-sm"
				}), !districtSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: district,
					onChange: (e) => setDistrict(e.target.value),
					"aria-label": "Filter by district",
					className: "rounded-lg border bg-background px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All districts"
					}), districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: d.slug,
						children: d.name
					}, d.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-3",
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Loading latest notices…"
					}),
					isError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Could not reach the update sources right now. Try refreshing in a few minutes."
					}),
					!isLoading && !isError && notices.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "No matching shutdown announcement right now."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "No planned notice has been published for this filter. If your supply is off, it is most likely a fault — call 1912 or use the TNPDCL Minnagam app to register it."
						})]
					}),
					notices.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border bg-card p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.source }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: formatWhen(n.publishedAt)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-lg font-bold leading-snug",
								children: n.title
							}),
							n.summary && !n.summary.toLowerCase().startsWith(n.title.toLowerCase().slice(0, 30)) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: n.summary
							}),
							n.places.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex flex-wrap gap-2",
								children: n.places.slice(0, 8).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border px-2 py-0.5 text-xs",
									children: p
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.link,
								target: "_blank",
								rel: "nofollow noopener noreferrer",
								className: "mt-3 inline-block text-sm font-medium text-primary underline",
								children: "Read the full announcement"
							})
						]
					}, n.id))
				]
			}),
			data?.fetchedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: [
					"Last updated ",
					formatWhen(data.fetchedAt),
					" IST · Sources:",
					" ",
					data.sources.map((s) => `${s.name} (${s.count})`).join(", ")
				]
			})
		]
	});
}
//#endregion
export { ShutdownLive as t };
