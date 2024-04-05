"use client";
import { useEffect, useRef } from "react";

export default function ({ children }) {
	const slider = useRef(null);
	const isDown = useRef(false);
	const startX = useRef(null);
	const scrollLeft = useRef(null);
	const sliderLeft = useRef(0);

	useEffect(() => {
		if (slider && slider.current) {
			slider.current.addEventListener("mousedown", onMouseDown);
			slider.current.addEventListener("mouseleave", onMouseLeave);
			slider.current.addEventListener("mouseup", onMouseUp);
			slider.current.addEventListener("mousemove", onMouseMove);
		}
		return () => {
			if (slider && slider.current) {
				slider.current.removeEventListener("mousedown", onMouseDown);
				slider.current.removeEventListener("mouseleave", onMouseLeave);
				slider.current.removeEventListener("mouseup", onMouseUp);
				slider.current.removeEventListener("mousemove", onMouseMove);
			}
		};
	}, []);

	const onMouseDown = (e) => {
		isDown.current = true;
		startX.current = e.pageX - slider.current.offsetLeft;
		scrollLeft.current = sliderLeft.current;
	};

	const onMouseLeave = (e) => {
		isDown.current = false;
	};

	const onMouseUp = (e) => {
		isDown.current = false;
	};

	const onMouseMove = (e) => {
		if (!isDown.current) return;
		e.preventDefault();
		const x = e.pageX - slider.current.offsetLeft;
		const walk = x - startX.current;
		sliderLeft.current = Math.min(sliderLeft.current + walk, 0);
		// sliderLeft.current = Math.max(sliderLeft.current, slider.current.offSetWidth - "100%")
		// console.log(slider.current.offsetWidth);
		// console.log(slider.current.parentElement);

		slider.current.style.left = sliderLeft.current + "px";
	};

	return (
		<div className="relative flex justify-between gap-20 pb-4 mb-4" ref={slider}>
			{children}
		</div>
	);
}
