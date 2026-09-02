import app from "./server/index.mjs";
import { buildFeed } from "./server/_ssr/shutdown.functions-DIX_T2V1.mjs";

const FEED_CACHE_KEY = "https://tnebpowercut.internal/__shutdown_feed.json";

async function persistFeed() {
  const data = await buildFeed();
  const response = new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=900"
    }
  });
  await caches.default.put(FEED_CACHE_KEY, response.clone());
  return data;
}

export default {
  async fetch(request, env, ctx) {
    return app.fetch(request, env, ctx);
  },

  async scheduled(controller, env, ctx) {
    ctx.waitUntil(
      persistFeed().catch((error) => {
        console.error("TNPDCL shutdown feed update failed", error);
      })
    );
  }
};
