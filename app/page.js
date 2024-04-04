import { IconSettings, IconBell } from "@tabler/icons-react";
import MenuCard from "@/components/menuCard";

// let slider = document.querySelector(".slider");
// let innerSlider = document.querySelector(".slider-inner");

// let pressed = false;
// let startx;
// let x;

// slider.addEventListener("mousedown", (e) => {
// 	pressed = true;
// 	startx = e.offsetX - innerSlider.offsetLeft;
// 	console.log(`OffsetX: ${e.offsetX}, InnerSlider OffsetLeft: ${innerSlider.offsetLeft}`);
// 	slider.style.cursor = "grabbing";
// });

// slider.addEventListener("mouseenter", () => {
// 	slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", () => {
// 	slider.style.cursor = "grab";
// });

// window.addEventListener("mouseup", () => {
// 	pressed = false;
// });

// slider.addEventListener("mousemove", (e) => {
// 	if (!pressed) return;
// 	e.preventDefault();

// 	x = e.offsetX;
// 	console.log(`x: ${x}, startx: ${startx}`);
// 	console.log(`Diff: ${x - startx}`);

// 	innerSlider.style.left = `${x - startx}px`;
// 	checkBoundary();
// });

// function checkBoundary(x, startx) {
// 	let outer = slider.getBoundingClientRect();
// 	let inner = innerSlider.getBoundingClientRect();

// 	if (parseInt(innerSlider.style.left) > 0) {
// 		innerSlider.style.left = "0px";
// 	}
// 	if (inner.right < outer.right) {
// 		innerSlider.style.left = `-${inner.width - outer.width}px`;
// 	}
// }

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
					{/* <div className="slider">
						<div className="slider-inner">
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</div>
					</div> */}
					<div className="flex justify-between gap-6 pb-2 mb-4 overflow-auto">
						<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
					</div>
					<div className="text-[22px] text-white font-semibold mb-2">Current Can/Bottle List</div>
					<div className="flex justify-between gap-6 pb-2 overflow-auto">
						<MenuCard bgImgSrc="/images/cardbg.png" num={1} title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
						<MenuCard bgImgSrc="/images/cardbg.png" num={2} title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
						<MenuCard bgImgSrc="/images/cardbg.png" num={3} title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
					</div>
				</div>
			</div>
		</div>
	);
}
