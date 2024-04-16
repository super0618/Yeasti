"use client";

import { useState, useRef } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import NumericInput from "react-numeric-input";
import httpReq from "@/lib/httpReq";

const Select = ({ name, onChange = null, children }) => {
	return (
		<div className="rounded-2xl border border-[#6271c2] bg-[#0F1535] pl-3 pr-2 mb-2">
			<select className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl py-1 text-xs cursor-pointer" name={name} onChange={onChange}>
				{children}
			</select>
		</div>
	);
};

const PricingRow = ({ no }) => {
	return (
		<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
			<div className="flex-auto">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-xs font-bold text-white">Size</p>
						<Select name={`size${no}`}>
							{[1, 2, 4, 8, 16].map((index) => (
								<option value={index}>{index} ounce</option>
							))}
						</Select>
					</div>
					<div>
						<p className="text-xs font-bold text-white">Price</p>
						<NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1" min={0} precision={0} name={`price${no}`} noStyle strict />
					</div>
				</div>
			</div>
			<div className="flex items-center text-red-500">
				<IconTrash size={16} strokeWidth={3} />
				<p className="text-sm italic font-bold">DELETE</p>
			</div>
		</div>
	);
};

export default function Home() {
	const imgRef = useRef(null);
	const infoRef = useRef(null);
	const pricingRef = useRef(null);

	const draft_types = ["2 Liter Keg (2L)", "4 Liter Keg (4L)", "5 Liter Keg (5L)", "Half Corny Keg (2.5gal)", "KeyKeg (10L)", "Three Gallon Corny Keg (3.0gal)", "Corny Keg (5gal)", "Sixth Barrel (5.17gal)", "KeyKeg (20L)", "Quarter Barrel (7.75gal)", "Slim Quarter Barrel (7.75gal)", "KeyKeg (30L)", "Conical Fermenter", "10 Gallon Keg (10gal)", "European Half Barrel (50L)", "Half Barrel (15.5gal)", "European Full Barrel (100L)"];
	const package_types = ["Can 12oz (single)", "Can 12oz (4-pack)", "Can 12oz (6-pack)", "Can 16oz (single)", "Can 16oz (4-pack)", "Can 19.2oz (single)", "Can 250ml (single)", "Can 250ml (4-pack)", "Can 330ml (single)", "Can 330ml (4-pack)", "Can 330ml (6-pack)", "Can 500ml (single)", "Can 500ml (4-pack)", "Bottle 12oz (single)", "Bottle 12oz (4-pack)", "Bottle 12oz (6-pack)", "Bottle 22oz (single)", "Bottle 22oz (4-pack)", "Bottle 330ml (single)", "Bottle 330ml (4-pack)", "Bottle 330ml (6-pack)", "Bottle 375ml (single)", "Bottle 500ml (single)", "Bottle 500ml (4-pack)", "Bottle 750ml (single)", "Bottle 1L (single)"];
	const styles = ["Pale Ale", "IPA", "NEIPA", "Stout", "Porter", "Lager", "Pilsner", "Wheat Beer", "Saison", "Barley Wine", "Bitter", "Blonde Ale", "Bock", "Dubbel", "Tripel", "Quad", "Lambic", "Gose", "Marzen/Oktoberfest", "Schwarzbier", "Vienna Lager", "Fruit Beer", "Herb and Spiced Beer", "Honey Beer", "Rye Beer", "Smoked Beer", "Vegetable Beer", "Wild Beer", "Wood-aged Beer", "Wine-Red", "Wine-White", "Wine-Rose", "Wine-Sparkling", "Wine-Dessert", "Wine-Fortified", "Mead-Traditional", "Mead-Melomel", "Mead-Cyser", "Mead-Pyment", "Mead-Metheglin", "Cider-Dry", "Cider-Sweet", "Cider-Fruit-flavored", "Cider-Spiced", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Brandy", "Liqueurs", "RTD-Whiskey", "RTD-Vodka", "RTD-Rum", "RTD-Gin", "RTD-Tequila", "RTD-Brandy", "RTD-Liqueurs"];

	const [types, setTypes] = useState(draft_types);
	const [priceCnt, setPriceCnt] = useState(1);

	const onImageLoad = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			const imgUrl = event.target.result;
			imgRef.current.src = imgUrl;
		};

		reader.readAsDataURL(file);
	};

	const onCategoryChange = (e) => {
		if (e.target.value === "Draft") {
			setTypes(draft_types);
		} else {
			setTypes(package_types);
		}
	};

	const onSave = () => {
		console.log("Name:", infoRef.current.pname.value);
		console.log("Description:", infoRef.current.pdescription.value);
		console.log("Producer:", infoRef.current.pproducer.value);
		console.log("ABV:", infoRef.current.pabv.value);
		console.log("Category:", infoRef.current.pcategory.value);
		console.log("Type:", infoRef.current.ptype.value);
		console.log("Style:", infoRef.current.pstyle.value);
		console.log("Quantity:", infoRef.current.pquantity.value);
	};

	const onDelete = () => {};

	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container">
					<Banner bgImgSrc="/images/item1.jpg" title="Brazil Loves New England" />
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
						<div className="col-span-2">
							<div className="bg-[#060B28] rounded-[20px] px-8 py-4">
								<p className="text-lg font-bold text-white mb-4">Product Image</p>
								<img src="https://via.placeholder.com/350x450" alt="item" className="w-full mb-4" ref={imgRef} />
								<div className="flex justify-center gap-4 text-[10px] text-[#0F1535] font-black">
									<label htmlFor="uploadImg" className="bg-white rounded-lg w-[100px] h-7 grid place-items-center">
										ADD
									</label>
									<input type="file" id="uploadImg" className="opacity-0 absolute -z-10" onChange={onImageLoad} />
									<div className="bg-white rounded-lg w-[100px] h-7 grid place-items-center">REMOVE</div>
								</div>
							</div>
						</div>
						<div className="col-span-2 md:col-span-3 grid gap-4">
							<form className="bg-[#060B28] rounded-[20px] px-8 py-4" ref={infoRef}>
								<p className="text-lg font-bold text-white mb-2">Product Information</p>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
									<div>
										<p className="text-xs font-bold">Product Name</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" name="pname" placeholder="Brazil Loves New England" />
										<p className="text-xs font-bold">Description</p>
										<textarea className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs resize-none h-[74px] mb-2" name="pdescription" placeholder="Some initial Bold text"></textarea>
										<p className="text-xs font-bold">Producer</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" name="pproducer" placeholder="Ellipsis Brewing" />
									</div>
									<div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold">ABV</p>
												<NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="5.8" min={0} precision={1} name="pabv" noStyle strict />
											</div>
											<div>
												<p className="text-xs font-bold">Category</p>
												<Select name="pcategory" onChange={onCategoryChange}>
													<option value="Draft">Draft</option>
													<option value="Package">Package</option>
												</Select>
											</div>
										</div>
										<p className="text-xs font-bold">Type</p>
										<Select name="ptype">
											{types.map((type) => (
												<option value={type}>{type}</option>
											))}
										</Select>
										<p className="text-xs font-bold">Style</p>
										<Select name="pstyle">
											{styles.map((style) => (
												<option value={style}>{style}</option>
											))}
										</Select>
										<p className="text-xs font-bold">Quantity</p>
										<NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1" min={1} precision={0} name="pquantity" noStyle strict />
									</div>
								</div>
							</form>
							<div className="bg-[#060B28] rounded-[20px] px-8 py-4">
								<p className="text-lg font-bold text-white mb-2">Pricing</p>
								<PricingRow no={1} />
								<div className="bg-white rounded-full w-[74px] h-7 grid place-items-center text-[10px] text-[#0F1535] font-black">ADD</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 text-xs text-[#0F1535] font-bold">
						<div className="bg-white rounded-xl h-9 grid place-items-center" onClick={onSave}>
							SAVE
						</div>
						<div className="bg-white rounded-xl h-9 grid place-items-center" onClick={onDelete}>
							DELETE
						</div>
					</div>
				</div>
			</MainContent>
		</>
	);
}
