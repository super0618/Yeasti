"use client";

import { AuthContextProvider } from "@/lib/context";
import { CookiesProvider } from "react-cookie";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<CookiesProvider defaultSetOptions={{ path: "/" }}>
			<AuthContextProvider>{children}</AuthContextProvider>
		</CookiesProvider>
	);
}
