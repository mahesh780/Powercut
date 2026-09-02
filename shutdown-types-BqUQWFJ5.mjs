import { t as districts } from "./districts-CWA60NWn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shutdown-types-BqUQWFJ5.js
/** Every searchable place name mapped to its district slug. */
var placeIndex = districts.flatMap((d) => [{
	place: d.name,
	slug: d.slug,
	district: d.name
}, ...d.towns.map((t) => ({
	place: t,
	slug: d.slug,
	district: d.name
}))]);
var alias = {
	trichy: "trichy",
	tiruchirappalli: "trichy",
	tiruchirapalli: "trichy",
	thoothukudi: "thoothukudi",
	tuticorin: "thoothukudi",
	nilgiris: "nilgiris",
	ooty: "nilgiris",
	udhagamandalam: "nilgiris",
	kanyakumari: "kanyakumari",
	nagercoil: "kanyakumari"
};
/** Find districts and place names mentioned in a piece of text. */
function matchPlaces(text) {
	const hay = ` ${text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ")} `;
	const slugs = /* @__PURE__ */ new Set();
	const places = /* @__PURE__ */ new Set();
	for (const { place, slug } of placeIndex) {
		const needle = ` ${place.toLowerCase()} `;
		if (hay.includes(needle)) {
			slugs.add(slug);
			places.add(place);
		}
	}
	for (const [word, slug] of Object.entries(alias)) if (hay.includes(` ${word} `) && districts.some((d) => d.slug === slug)) slugs.add(slug);
	return {
		districtSlugs: [...slugs],
		places: [...places]
	};
}
function formatWhen(iso) {
	return new Date(iso).toLocaleString("en-IN", {
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Asia/Kolkata"
	});
}
//#endregion
export { matchPlaces as n, formatWhen as t };
