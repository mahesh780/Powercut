globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-02T13:05:05.072Z",
		"size": 20373,
		"path": "../client/favicon.ico"
	},
	"/assets/about-BA-fYqC6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d14-MHyfrMqYOW0JDI1xvPCVYIqbLDI\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 3348,
		"path": "../client/assets/about-BA-fYqC6.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"b6-PXf8QyN1v4fc9Kx0rhRnHhzLAQI\"",
		"mtime": "2026-09-02T13:05:05.072Z",
		"size": 182,
		"path": "../client/robots.txt"
	},
	"/assets/contact-DO-osaT2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94b-bW3Odem7xddgAYTPW5igZ5h2us8\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 2379,
		"path": "../client/assets/contact-DO-osaT2.js"
	},
	"/assets/data-sources-BqdMShOG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b09-3UsR+b1trXlktZP1lv/A0PEWgpM\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 2825,
		"path": "../client/assets/data-sources-BqdMShOG.js"
	},
	"/assets/districts._slug-l5fjX3ex.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ee-tUN7wMrZdbLQd/mWKjeiA8qMYKs\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 4590,
		"path": "../client/assets/districts._slug-l5fjX3ex.js"
	},
	"/assets/disclaimer-CoV8Tlg2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c0-rwSwYn8DAMdOmujx39wNj3YvPlo\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 2496,
		"path": "../client/assets/disclaimer-CoV8Tlg2.js"
	},
	"/assets/districts.index-Cv9B60_w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"510-jyLgfwsqxbbVeFeamCpTO3PQ724\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 1296,
		"path": "../client/assets/districts.index-Cv9B60_w.js"
	},
	"/assets/editorial-policy-Bh7xnW7t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bef-QnevWjAj0cFqDWF/fvAF4qzoedw\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 3055,
		"path": "../client/assets/editorial-policy-Bh7xnW7t.js"
	},
	"/assets/faq-CP8FGE3d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2-sIZH92afn+IZgukQiSGyNWmEza8\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 722,
		"path": "../client/assets/faq-CP8FGE3d.js"
	},
	"/assets/guides._slug-DQ3oObNf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"897-bmLN3otJWodO/edccCuykM6wKfc\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 2199,
		"path": "../client/assets/guides._slug-DQ3oObNf.js"
	},
	"/assets/index-D582A9-S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5cd1f-sHuEp666Qum12VhsSXoYmP0D8cI\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 380191,
		"path": "../client/assets/index-D582A9-S.js"
	},
	"/assets/privacy-policy-rekKjk1n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c83-8IP3rMBIOaa2MF7Idy5g322rGHU\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 3203,
		"path": "../client/assets/privacy-policy-rekKjk1n.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 625,
		"path": "../client/assets/redirect-DCb_aIiF.js"
	},
	"/assets/report-B16-y0pW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd7-49dwOJN5KNT/ryneh4Hx8CyinRE\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 3287,
		"path": "../client/assets/report-B16-y0pW.js"
	},
	"/assets/routes-8Z-JL7Vh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1822-I7T8SSbUw/H87HlgQMEphYaaKcc\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 6178,
		"path": "../client/assets/routes-8Z-JL7Vh.js"
	},
	"/assets/shutdown-live-BrLJRuiM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4562-wUe7z0OkkobKeAbE8tGQ09ue+GQ\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 17762,
		"path": "../client/assets/shutdown-live-BrLJRuiM.js"
	},
	"/assets/shutdown.index-LF7oxSSY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13f4-jo3AYwfy1qlbp4jI8nGbBGhV2Zg\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 5108,
		"path": "../client/assets/shutdown.index-LF7oxSSY.js"
	},
	"/assets/shutdown.today-BHaMQ66w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112a-/NuGbIYJ9/lsfQDhsgFoC7pm0R8\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 4394,
		"path": "../client/assets/shutdown.today-BHaMQ66w.js"
	},
	"/assets/site-layout-DcnTRoeA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d5-DAAVWDeENWvL4Hl38azf2sU8Sg0\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 6357,
		"path": "../client/assets/site-layout-DcnTRoeA.js"
	},
	"/assets/styles-D-7CxIae.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12711-p4OTHLQfjoZPhwwzOZ0q27svZSo\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 75537,
		"path": "../client/assets/styles-D-7CxIae.css"
	},
	"/assets/shutdown.tomorrow-1tqWLIis.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12de-pkufgleQH6JCQ5C7j8RA3n9FG6s\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 4830,
		"path": "../client/assets/shutdown.tomorrow-1tqWLIis.js"
	},
	"/assets/guides.index-BNVvLRYs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"475-baV21tSvdBccG1m8KHZy981loR4\"",
		"mtime": "2026-09-02T13:05:04.199Z",
		"size": 1141,
		"path": "../client/assets/guides.index-BNVvLRYs.js"
	},
	"/assets/terms-Br6lDrYf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c9f-RKJQhZpw9UtWkLqxqvliwdUOgSw\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 3231,
		"path": "../client/assets/terms-Br6lDrYf.js"
	},
	"/assets/tariff-B9e0_egU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"578-70UNffS0wLN9fd/VR5mD3X5YDXU\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 1400,
		"path": "../client/assets/tariff-B9e0_egU.js"
	},
	"/assets/tneb-bill-calculator-CRGYI-uG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178e-KB5ILjNcHhU8yPQSLIYZ8vDel2I\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 6030,
		"path": "../client/assets/tneb-bill-calculator-CRGYI-uG.js"
	},
	"/assets/tneb-tariff-nvwtNnsl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10de-tXS2R62DMmybbXVKv0+PWI46a14\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 4318,
		"path": "../client/assets/tneb-tariff-nvwtNnsl.js"
	},
	"/assets/ui-bits-DdAjocg2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9021-Y98R4Wnw/HUkRu4NqoXNXYJVO8g\"",
		"mtime": "2026-09-02T13:05:04.200Z",
		"size": 36897,
		"path": "../client/assets/ui-bits-DdAjocg2.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_j21Qvj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
