//#region node_modules/.nitro/vite/services/ssr/assets/tariff-BML_mBEq.js
var slabsUpTo500 = [
	{
		from: 0,
		to: 100,
		rate: 0
	},
	{
		from: 100,
		to: 200,
		rate: 2.35
	},
	{
		from: 200,
		to: 400,
		rate: 4.7
	},
	{
		from: 400,
		to: 500,
		rate: 6.3
	}
];
var slabsAbove500 = [
	{
		from: 0,
		to: 100,
		rate: 4.7
	},
	{
		from: 100,
		to: 400,
		rate: 6.3
	},
	{
		from: 400,
		to: 500,
		rate: 8.4
	},
	{
		from: 500,
		to: 600,
		rate: 9.45
	},
	{
		from: 600,
		to: 800,
		rate: 10.5
	},
	{
		from: 800,
		to: 1e3,
		rate: 11.55
	},
	{
		from: 1e3,
		to: null,
		rate: 12.6
	}
];
function fixedCharge(units) {
	if (units <= 500) return 30;
	if (units <= 600) return 60;
	if (units <= 800) return 80;
	if (units <= 1e3) return 100;
	return 150;
}
function calculateBill(units) {
	const u = Math.max(0, Math.round(units));
	const slabs = u <= 500 ? slabsUpTo500 : slabsAbove500;
	const lines = [];
	for (const s of slabs) {
		const upper = s.to === null ? u : Math.min(u, s.to);
		const inSlab = Math.max(0, upper - s.from);
		if (inSlab <= 0) continue;
		lines.push({
			label: s.to === null ? `Above ${s.from} units` : `${s.from + 1}–${s.to} units`,
			units: inSlab,
			rate: s.rate,
			amount: +(inSlab * s.rate).toFixed(2)
		});
	}
	const energyCharge = +lines.reduce((a, l) => a + l.amount, 0).toFixed(2);
	const fixed = fixedCharge(u);
	const total = +(energyCharge + fixed).toFixed(2);
	return {
		units: u,
		lines,
		energyCharge,
		fixedCharge: fixed,
		subsidyUnits: u <= 500 ? Math.min(u, 100) : 0,
		total,
		perUnit: u > 0 ? +(total / u).toFixed(2) : 0
	};
}
var applianceWatts = [
	{
		name: "Ceiling fan",
		watts: 70
	},
	{
		name: "LED bulb (9 W)",
		watts: 9
	},
	{
		name: "Tube light",
		watts: 36
	},
	{
		name: "Refrigerator (250 L)",
		watts: 150
	},
	{
		name: "Split AC 1.5 ton (5 star)",
		watts: 1400
	},
	{
		name: "Split AC 1.5 ton (3 star)",
		watts: 1700
	},
	{
		name: "Washing machine",
		watts: 500
	},
	{
		name: "Television (LED 43\")",
		watts: 90
	},
	{
		name: "Mixer grinder",
		watts: 600
	},
	{
		name: "Electric iron",
		watts: 1e3
	},
	{
		name: "Geyser (15 L)",
		watts: 2e3
	},
	{
		name: "Water pump (1 HP)",
		watts: 750
	},
	{
		name: "Laptop",
		watts: 60
	},
	{
		name: "Induction cooktop",
		watts: 1600
	}
];
//#endregion
export { slabsUpTo500 as i, calculateBill as n, slabsAbove500 as r, applianceWatts as t };
