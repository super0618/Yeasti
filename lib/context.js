"use client";

import React, { useState, createContext, useEffect, useLayoutEffect } from "react";
import { useCookies } from "react-cookie";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import httpReq from "@/lib/httpReq";

export const AuthContext = createContext({ auth: false });

export const AuthContextProvider = ({ children }) => {
	const [cookie, setCookie] = useCookies();

	const [auth, setAuth] = useState(cookie.token ? true : false);

	useLayoutEffect(() => {
		if (!cookie.token) return;
		const decoded = jwtDecode(cookie.token);
		if (!decoded.name || !decoded.password) {
			setAuth(false);
			return;
		}
		(async () => {
			try {
				await httpReq.post("/api/auth/signin", { email: decoded.email, password: decoded.password });
				setCookie("token", res);
			} catch (err) {
				setAuth(false);
			}
		})();
	}, []);

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
