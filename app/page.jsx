"use client";

import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MenuCard from "@/components/menuCard";

export default function () {
	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container">
					<div className="bg-[url('/images/Banner.png')] bg-cover bg-center h-[180px] rounded-[20px] mb-6"></div>
					<div className="text-[22px] text-white font-semibold mb-2">Current Tap List</div>
					<Swiper
						modules={[Navigation, Scrollbar, A11y]}
						spaceBetween={30}
						breakpoints={{
							550: { slidesPerView: 1.25 },
							650: { slidesPerView: 1.5 },
							700: { slidesPerView: 1.75 },
							800: { slidesPerView: 2 },
							850: { slidesPerView: 2.25 },
							900: { slidesPerView: 2.5 },
							1000: { slidesPerView: 2.75 },
							1100: { slidesPerView: 3 },
						}}
						style={{ paddingBottom: 24 }}
					>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg1.png" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg2.png" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg3.png" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg1.png" num={4} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg2.png" num={5} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
						<SwiperSlide>
							<MenuCard bgImgSrc="/images/cardbg3.png" num={6} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
						</SwiperSlide>
					</Swiper>
					<div className="text-[22px] text-white font-semibold mb-2">Current Can/Bottle List</div>
					<div className="overflow-hidden">
						<Swiper
							modules={[Navigation, Scrollbar, A11y]}
							spaceBetween={30}
							breakpoints={{
								550: { slidesPerView: 1.25 },
								650: { slidesPerView: 1.5 },
								700: { slidesPerView: 1.75 },
								800: { slidesPerView: 2 },
								850: { slidesPerView: 2.25 },
								900: { slidesPerView: 2.5 },
								1000: { slidesPerView: 2.75 },
								1100: { slidesPerView: 3 },
							}}
							style={{ paddingBottom: 24 }}
						>
							<SwiperSlide>
								<MenuCard bgImgSrc="/images/cardbg.png" title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<MenuCard bgImgSrc="/images/cardbg.png" title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<MenuCard bgImgSrc="/images/cardbg.png" title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</MainContent>
		</>
	);
}