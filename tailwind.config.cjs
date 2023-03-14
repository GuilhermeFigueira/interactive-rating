/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Overpass, sans-serif"],
		},
		extend: {
			colors: {
				orange: "hsl(25, 97%, 53%)",
				white: "hsl(0, 0%, 100%)",
				grey: {
					light: "",
					medium: "",
				},
				blue: {
					dark: "hsl(213, 19%, 18%)",
					very_dark: "hsl(216, 12%, 8%)",
				},
			},
		},
	},
	plugins: [],
};
