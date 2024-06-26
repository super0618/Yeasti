"use client";

import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/productCard";

export default function Home() {
	return (
		<div className="main-container">
			<SideMenu />
			<div className="overflow-hidden">
				<TopNavbar />
				<MainContent>
					<div className="container">
						<Banner bgImgSrc="/images/banner1.jpg" title="Your Digital Menu" />
						<div className="text-[22px] text-white font-semibold mb-2">Current Package List</div>
						<div className="overflow-hidden">
							<Swiper
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
									<ProductCard bgImgSrc="/images/item1.jpg" num={1} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item2.jpg" num={2} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item3.jpg" num={3} title="Doubting The Buffalo" description="Barrel Aged Stout with Cinnamon and Vanilla" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item1.jpg" num={4} title="Brazil Loves New England" description="NEIPA with Simcoe, Mosaic, and Citra" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item2.jpg" num={5} title="Fruit Punch Project" description="Berliner Weisse with Fruit Punch" members={["4oz - $2", "10oz - $4", "16oz - $7"]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item3.jpg" num="+" title="Add New Draft" description="Search for new draft to add" members={[]} />
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="text-[22px] text-white font-semibold mb-2">Inventory Package</div>
						<div className="overflow-hidden">
							<Swiper
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
									<ProductCard bgImgSrc="/images/item4.jpg" title="Mylar Bags" description="NEIPA with Amarillo, Galaxy, Citra, Mosaic, El dorado" members={["", "16oz Can - $8", ""]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item4.jpg" title="EverHaze" description="NEIPA with Amarillo, Citra, Cashmere" members={["", "16oz Can - $8", ""]} />
								</SwiperSlide>
								<SwiperSlide>
									<ProductCard bgImgSrc="/images/item4.jpg" title="Very HHHazyyy" description="NEIPA with Galaxy, Citra, and some other hops" members={["", "16oz Can - $8", ""]} />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</MainContent>
			</div>
		</div>
	);
}
