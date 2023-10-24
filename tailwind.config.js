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
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
