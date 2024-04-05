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
					<div className="bg-[url('/images/Banner.png')] bg-cover bg-center h-[180px] rounded-[20px] mb-6"></div>
					<div className="text-[22px] text-white font-semibold mb-2">Current Package List</div>
					<div className="overflow-hidden">
						<CustomSlider>
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg1.png" num={4} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg2.png" num={5} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
							<MenuCard bgImgSrc="/images/cardbg3.png" num={6} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</CustomSlider>
					</div>
					<div className="text-[22px] text-white font-semibold mb-2">Favorite Package</div>
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
