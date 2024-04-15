"use client";

import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/productCard";

export default function Home() {
	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-3 text-white gap-y-6 md:gap-x-6 mb-6">
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
								<ProductCard bgImgSrc="/images/item1.jpg" num={6} title="Hazy Little Thing" description="Sierra Nevada Brewing Company" members={["20oz bottles", "", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item2.jpg" num={1} title="Hazy Jane" description="BrewDog" members={["Slim Keg", "", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item3.jpg" num={2} title="Hazy Wonder" description="Lagunitas Brewing Comapny" members={["Half Barrel Keg", "", ""]} />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="overflow-hidden mb-12">
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
								<ProductCard bgImgSrc="/images/item4.jpg" num={3} title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["16oz Cans", "", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item4.jpg" num={1} title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["Slim Keg", "", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item4.jpg" num={5} title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["Slim Keg", "", ""]} />
							</SwiperSlide>
						</Swiper>
					</div>
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
								<ProductCard bgImgSrc="/images/item4.jpg" num={6} title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item4.jpg" num={1} title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
							<SwiperSlide>
								<ProductCard bgImgSrc="/images/item4.jpg" num={2} title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</MainContent>
		</>
	);
}
