/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./node_modules/flowbite/**/*.{js,ts}",
	],
	theme: {
		fontFamily: {
			sans: ["Montserrat"],
			serif: ["Montserrat"],
			mono: ["Montserrat"],
			display: ["Montserrat"],
			body: ["Montserrat"],
		},
		extend: {
			colors: {
				"sips-orange": "#F36D25",
				"sips-navy": "#1A3668",
				"sips-green": "#2D9A47",
				"sips-maroon": "#8F1736",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
	safelist: [
		{
			pattern: /(bg|text|border)-sips-(orange|navy|green|maroon)/,
		},
	],
};
