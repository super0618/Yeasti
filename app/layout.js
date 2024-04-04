import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Yeasti",
	description: "This is description for Yeasti",
};

export default function ({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
