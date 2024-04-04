/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "24px",
				screens: { sm: "1100px" },
			},
		},
	},
	plugins: [],
};
