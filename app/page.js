"use client";

import { useEffect, useState, useRef } from "react";
import { IconSettings, IconBell } from "@tabler/icons-react";
import MenuCard from "@/components/menuCard";

const CustomSlider = ({ children }) => {
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

			return () => {
				slider.current.removeEventListener("mousedown", onMouseDown);
				slider.current.removeEventListener("mouseleave", onMouseLeave);
				slider.current.removeEventListener("mouseup", onMouseUp);
				slider.current.removeEventListener("mousemove", onMouseMove);
			};
		}
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
		<div className="relative flex justify-between gap-6 pb-4 mb-4" ref={slider}>
			{children}
		</div>
	);
};

export default function Home() {
	return (
		<div className="container flex py-8 h-full">
			<div className="relative basis-[76px] grow-0 shrink-0 bg-[url('/images/Bar.svg')] bg-right-top bg-no-repeat bg-[#1D203E4A] rounded-l-2xl">
				<a href="/">
					<img src="/images/logo.svg" alt="logo" className="block mx-auto mt-4 mb-[72px]" />
				</a>
				<a href="#">
					<img src="/images/ellipse1.svg" alt="elp1" className="menuitem block mx-auto rounded-full mb-6" />
				</a>
				<a href="#">
					<img src="/images/ellipse2.svg" alt="elp2" className="menuitem block mx-auto rounded-full mb-6" />
				</a>
				<a href="#">
					<img src="/images/ellipse3.svg" alt="elp3" className="menuitem block mx-auto rounded-full mb-6" />
				</a>
				<a href="#">
					<img src="/images/icon_add.svg" alt="add" className="menuitem block mx-auto rounded-full mb-6" />
				</a>
				<img src="/images/selected.svg" alt="selected" className="absolute top-32 left-1 block mx-auto" />
			</div>
			<div className="flex-auto bg-[#1D203E] rounded-r-2xl">
				<div className="sticky top-0 grid grid-cols-3 justify-center text-white text-[13px] bg-[#2C2F48] px-6 h-11 rounded-tr-2xl">
					<div></div>
					<div className="flex items-center justify-center">Yeasti</div>
					<div className="flex items-center justify-end gap-8 text-[#EBEBF5A0]">
						<IconBell size={20} />
						<IconSettings size={20} />
					</div>
				</div>
				<div className="p-6 overflow-auto" style={{ height: "calc(100% - 44px)" }}>
					<div className="bg-[url('/images/Banner.png')] bg-cover bg-center h-[180px] rounded-[20px] mb-6"></div>
					<div className="text-[22px] text-white font-semibold mb-2">Current Tap List</div>
					<div className="overflow-hidden">
						<CustomSlider>
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</CustomSlider>
					</div>
					<div className="text-[22px] text-white font-semibold mb-2">Current Can/Bottle List</div>
					<div className="overflow-hidden">
						<CustomSlider>
							<MenuCard bgImgSrc="/images/cardbg.png" num={1} title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
							<MenuCard bgImgSrc="/images/cardbg.png" num={2} title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
							<MenuCard bgImgSrc="/images/cardbg.png" num={3} title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
						</CustomSlider>
					</div>
				</div>
			</div>
		</div>
	);
}
