"use client";

import { CookiesProvider } from "react-cookie";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<CookiesProvider defaultSetOptions={{ path: "/" }}>{children}</CookiesProvider>
		</>
	);
}
