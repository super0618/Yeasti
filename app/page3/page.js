import CustomSlider from "@/components/customSlider";
import SideMenu from "@/components/sideMenu";
import { IconSettings, IconBell } from "@tabler/icons-react";
import MenuCard from "@/components/menuCard";

export default function Home() {
	return (
		<div className="flex h-full">
			<SideMenu />
			<div className="flex-auto bg-[#1D203E] rounded-r-2xl">
				<div className="sticky top-0 grid grid-cols-3 justify-center text-white text-[13px] bg-[#2C2F48] px-6 h-11 rounded-tr-2xl">
					<div></div>
					<div className="flex items-center justify-center">Yeasti</div>
					<div className="flex items-center justify-end gap-8 text-[#EBEBF5A0]">
						<IconBell size={20} />
						<IconSettings size={20} />
					</div>
				</div>
				<div className="container p-6" style={{ height: "calc(100% - 44px)" }}>
					<div className="grid pt-6 grid-cols-3 text-white gap-6 mb-24">
						<div className="col-span-2 bg-[#060B28] rounded-[20px] p-6">
							<p className="text-xs mb-3">Search for Product</p>
							<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="hazy" />
						</div>
						<div className="bg-[#060B28] rounded-[20px] p-6">
							<p className="text-lg font-bold mb-3">Cant find what your looking for?</p>
							<div className="mx-auto bg-white rounded-xl w-[100px] h-8 grid place-items-center text-[10px] text-[#0F1535]">Add</div>
						</div>
					</div>
					<div className="overflow-hidden mb-12">
						<CustomSlider>
							<MenuCard bgImgSrc="/images/cardbg1.png" title="Hazy Little Thing" description="Sierra Nevada Brewing Company" members={[]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" title="Hazy Jane" description="BrewDog" members={[]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" title="Hazy Wonder" description="Lagunitas Brewing Comapny" members={[]} />
						</CustomSlider>
					</div>
					<div className="overflow-hidden">
						<CustomSlider>
							<MenuCard bgImgSrc="/images/cardbg.png" title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
							<MenuCard bgImgSrc="/images/cardbg.png" title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
							<MenuCard bgImgSrc="/images/cardbg.png" title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
						</CustomSlider>
					</div>
				</div>
			</div>
		</div>
	);
}
