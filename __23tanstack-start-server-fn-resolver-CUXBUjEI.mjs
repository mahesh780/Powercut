//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CUXBUjEI.js
var manifest = { "73c3b00b00b30ff89c72ce467aa6f1e81616a0a130b75690ab1f5bc3fbb70643": {
	functionName: "getShutdownFeed_createServerFn_handler",
	importer: () => import("./_ssr/shutdown.functions-DIX_T2V1.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
