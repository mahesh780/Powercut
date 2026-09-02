import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as breadcrumbSchema } from "./ui-bits-BaemK1C6.mjs";
import { n as getDistrict } from "./districts-CWA60NWn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/districts._slug-C5M1Kihs.js
var $$splitComponentImporter = () => import("./districts._slug-DvnzOMlp.mjs");
var Route = createFileRoute("/districts/$slug")({
	loader: ({ params }) => {
		const district = getDistrict(params.slug);
		if (!district) throw notFound();
		return { district };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "District not found — TNEB Power Cut" }, {
			name: "robots",
			content: "noindex"
		}] };
		const d = loaderData.district;
		const title = `${d.name} Power Shutdown Today — TNEB Outage Information`;
		const description = `Planned TNPDCL power shutdown information for ${d.name} district: distribution circle ${d.circle}, main towns, how to confirm today's outage and who to call for faults.`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: `/districts/${params.slug}`
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: `/districts/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						url: "/"
					},
					{
						name: "Districts",
						url: "/districts"
					},
					{
						name: d.name,
						url: `/districts/${params.slug}`
					}
				]))
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
