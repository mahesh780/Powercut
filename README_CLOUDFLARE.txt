CLOUDFLARE DEPLOYMENT
=====================

This package is a Cloudflare Worker + Static Assets deployment.
It must be deployed with Wrangler, NOT with the dashboard's "Upload static files"
uploader shown in Cloudflare's static-assets screen.

Recommended:
  npx wrangler deploy

The Worker runs a Cron Trigger every 15 minutes:
  */15 * * * *

The scheduled Worker fetches the TNEB/TNPDCL shutdown feed and stores the latest
JSON in Cloudflare's Cache API. The website reads the persisted feed first and
falls back to a live fetch if needed.

IMPORTANT:
- The Cloudflare dashboard page titled "Upload static files to update your Worker"
  is NOT the correct deployment method for this package.
- If using a Git repository, connect the repository under Workers & Pages and use
  `npx wrangler deploy` as the deployment command.
