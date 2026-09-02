import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as matchPlaces } from "./shutdown-types-BqUQWFJ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shutdown.functions-DIX_T2V1.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var CACHE_TTL_MS = 9e5;
var cache = null;
var NEWS_QUERIES = [
	"\"power shutdown\" Tamil Nadu",
	"\"power cut\" TNPDCL areas",
	"\"electricity supply will be suspended\" Tamil Nadu",
	"\"power supply\" \"will be suspended\" TANGEDCO",
	"\"power shutdown\" district Tamil Nadu areas",
	"மின்தடை தமிழ்நாடு"
];
function decode(s) {
	let out = s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
	for (let i = 0; i < 2; i++) out = out.replace(/&nbsp;/g, " ").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/<[^>]*>/g, " ");
	return out.replace(/\s+/g, " ").trim();
}
function parseRss(xml, sourceLabel) {
	const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
	const out = [];
	for (const item of items) {
		const title = decode(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
		const link = decode(item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? "");
		const pub = decode(item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "");
		const desc = decode(item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? "");
		const src = decode(item.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] ?? sourceLabel);
		if (!title || !link) continue;
		const date = pub ? new Date(pub) : /* @__PURE__ */ new Date();
		if (Number.isNaN(date.getTime())) continue;
		const { districtSlugs, places } = matchPlaces(`${title} ${desc}`);
		out.push({
			id: link,
			title: title.replace(/\s+-\s+[^-]+$/, "").trim(),
			summary: desc.slice(0, 260),
			link,
			source: src || sourceLabel,
			publishedAt: date.toISOString(),
			districtSlugs,
			places
		});
	}
	return out;
}
async function fetchWithTimeout(url, ms = 8e3) {
	try {
		const res = await fetch(url, {
			signal: AbortSignal.timeout(ms),
			headers: { "user-agent": "tnebpowercut.in/1.0 (+https://tnebpowercut.in)" }
		});
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	}
}
/** Official TNEB CPRO shutdown page (Chennai region press releases). */
async function fetchCpro() {
	const html = await fetchWithTimeout("http://tneb.tnebnet.org/cpro/today.html");
	if (!html || html.trimStart().startsWith("<?")) return [];
	const rows = html.match(/<tr>[\s\S]*?<\/tr>/gi) ?? [];
	const out = [];
	for (const row of rows) {
		const cells = (row.match(/<td[\s\S]*?<\/td>/gi) ?? []).map(decode).filter(Boolean);
		if (cells.length < 2) continue;
		const dateText = cells[0] ?? "";
		const area = cells[1] ?? "";
		if (!/\d/.test(dateText) || area.length < 6) continue;
		const [dd = "", mm = "", yy = ""] = dateText.split(/[-/]/);
		const iso = /* @__PURE__ */ new Date(`20${yy.slice(-2)}-${mm}-${dd}T09:00:00+05:30`);
		if (Number.isNaN(iso.getTime())) continue;
		const { districtSlugs, places } = matchPlaces(area);
		out.push({
			id: `cpro-${dateText}-${area.slice(0, 40)}`,
			title: `Planned shutdown 09:00–14:00 — ${area.slice(0, 90)}`,
			summary: area.slice(0, 400),
			link: "http://tneb.tnebnet.org/cpro/today.html",
			source: "TNEB CPRO (official)",
			publishedAt: iso.toISOString(),
			districtSlugs: districtSlugs.length ? districtSlugs : ["chennai"],
			places
		});
	}
	return out;
}
async function buildFeed() {
	const sources = [];
	const all = [];
	const cpro = await fetchCpro().catch(() => []);
	sources.push({
		name: "TNEB CPRO (official)",
		ok: cpro.length > 0,
		count: cpro.length
	});
	all.push(...cpro);
	const news = (await Promise.all(NEWS_QUERIES.map(async (q) => {
		const xml = await fetchWithTimeout(`https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-IN&gl=IN&ceid=IN:en`);
		return xml ? parseRss(xml, "Tamil Nadu media") : [];
	}))).flat();
	sources.push({
		name: "Tamil Nadu press announcements",
		ok: news.length > 0,
		count: news.length
	});
	all.push(...news);
	const cutoff = Date.now() - 3888e6;
	const seen = /* @__PURE__ */ new Set();
	const notices = all.filter((n) => new Date(n.publishedAt).getTime() > cutoff).filter((n) => {
		const key = n.title.toLowerCase().slice(0, 70);
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	}).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 200);
	return {
		fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
		notices,
		sources
	};
}
const FEED_CACHE_KEY = "https://tnebpowercut.internal/__shutdown_feed.json";
async function readPersistedFeed() {
  try {
    const response = await caches.default.match(FEED_CACHE_KEY);
    if (!response) return null;
    return await response.json();
  } catch {
    return null;
  }
}
var getShutdownFeed_createServerFn_handler = createServerRpc({
	id: "73c3b00b00b30ff89c72ce467aa6f1e81616a0a130b75690ab1f5bc3fbb70643",
	name: "getShutdownFeed",
	filename: "src/lib/shutdown.functions.ts"
}, (opts) => getShutdownFeed.__executeServer(opts));
var getShutdownFeed = createServerFn({ method: "GET" }).handler(getShutdownFeed_createServerFn_handler, async () => {
	const persisted = await readPersistedFeed();
	if (persisted) return persisted;
	if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.data;
	try {
		const data = await buildFeed();
		cache = {
			at: Date.now(),
			data
		};
		return data;
	} catch {
		if (cache) return cache.data;
		return {
			fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
			notices: [],
			sources: []
		};
	}
});
//#endregion
export { buildFeed, getShutdownFeed_createServerFn_handler };
