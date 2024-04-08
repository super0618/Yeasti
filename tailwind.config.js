/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			container: {
				center: true,
				screens: { sm: "1100px" },
			},
			screens: {
				xs: "550px",
			},
		},
	},
	plugins: [],
};
