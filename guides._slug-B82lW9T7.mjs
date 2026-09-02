import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as breadcrumbSchema, o as faqSchema } from "./ui-bits-BaemK1C6.mjs";
import { t as getGuide } from "./guides-BRogxE4k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guides._slug-B82lW9T7.js
var $$splitComponentImporter = () => import("./guides._slug-6XFnbQGQ.mjs");
var Route = createFileRoute("/guides/$slug")({
	loader: ({ params }) => {
		const guide = getGuide(params.slug);
		if (!guide) throw notFound();
		return { guide };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Guide not found — TNEB Power Cut" }, {
			name: "robots",
			content: "noindex"
		}] };
		const g = loaderData.guide;
		return {
			meta: [
				{ title: g.metaTitle },
				{
					name: "description",
					content: g.description
				},
				{
					property: "og:title",
					content: g.metaTitle
				},
				{
					property: "og:description",
					content: g.description
				},
				{
					property: "og:url",
					content: `/guides/${params.slug}`
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: `/guides/${params.slug}`
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: g.title,
						description: g.description,
						dateModified: g.updated,
						inLanguage: "en-IN",
						author: {
							"@type": "Organization",
							name: "TNEB Power Cut"
						},
						publisher: {
							"@type": "Organization",
							name: "TNEB Power Cut"
						}
					})
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbSchema([
						{
							name: "Home",
							url: "/"
						},
						{
							name: "Guides",
							url: "/guides"
						},
						{
							name: g.title,
							url: `/guides/${params.slug}`
						}
					]))
				},
				{
					type: "application/ld+json",
					children: JSON.stringify(faqSchema(g.faqs))
				}
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
