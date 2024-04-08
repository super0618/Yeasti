"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function () {
	const pathname = usePathname();
	const selectRef = useRef(null);

	useEffect(() => {
		switch (pathname) {
			case "/":
				selectRef.current.style.display = "none";
				break;
			case "/draft":
				selectRef.current.style.display = "block";
				selectRef.current.style.top = "128px";
				break;
			case "/package":
				selectRef.current.style.display = "block";
				selectRef.current.style.top = "192px";
				break;
			case "/search":
				selectRef.current.style.display = "block";
				selectRef.current.style.top = "256px";
				break;
			case "/add":
				selectRef.current.style.display = "block";
				selectRef.current.style.top = "320px";
				break;
		}
	}, []);

	return (
		<div className="fixed top-0 left-0 bottom-0 w-[72px] bg-[url('/images/Bar.svg')] bg-right-top bg-no-repeat bg-[#1D203E4A] rounded-l-2xl z-50">
			<Link href="/">
				<img src="/images/logo.svg" alt="logo" className="block mx-auto mt-4 mb-[72px]" />
			</Link>
			<Link href="/draft">
				<img src="/images/ellipse1.svg" alt="elp1" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/draft" ? "active" : ""}`} />
			</Link>
			<Link href="/package">
				<img src="/images/ellipse2.svg" alt="elp2" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/package" ? "active" : ""}`} />
			</Link>
			<Link href="/search">
				<img src="/images/ellipse3.svg" alt="elp3" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/search" ? "active" : ""}`} />
			</Link>
			<Link href="/add">
				<img src="/images/icon_add.svg" alt="add" className={`menuitem block mx-auto rounded-full mb-6 ${pathname === "/add" ? "active" : ""}`} />
			</Link>
			<img src="/images/selected.svg" alt="selected" className="absolute left-1 mx-auto hidden" ref={selectRef} />
		</div>
	);
}
