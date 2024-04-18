"use client";

import { useState, useRef } from "react";
import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import Banner from "@/components/banner";
import { IconTrash } from "@tabler/icons-react";
import NumericInput from "react-numeric-input";
import { toast } from "react-toastify";
import httpReq from "@/lib/httpReq";

const Select = ({ name, onChange = null, children }) => {
	return (
		<select className="w-full text-[#e1e1e1] bg-[#0F1535] border border-[#6271c2] rounded-2xl py-1 text-xs cursor-pointer" name={name} onChange={onChange}>
			{children}
		</select>
	);
};

const PricingRow = ({ no, onSizeChange, onPriceChange, size, price, onDelete }) => {
	return (
		<div className="flex flex-col xs:flex-row gap-x-6 mb-2">
			<div className="flex-auto">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-xs font-bold text-white">Size</p>
						<Select value={size} onChange={(e) => onSizeChange(no, e.target.value)}>
							{[1, 2, 4, 8, 16].map((index) => (
								<option value={index}>{index} ounce</option>
							))}
						</Select>
					</div>
					<div>
						<p className="text-xs font-bold text-white">Price</p>
						<NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs" placeholder="1" min={0} max={99999} precision={0} name={`price${no}`} value={price} onChange={(e) => onPriceChange(no, e)} noStyle strict />
					</div>
				</div>
			</div>
			<div className="flex items-center text-red-500 pt-3 cursor-pointer" onClick={() => onDelete(no)}>
				<IconTrash size={16} strokeWidth={3} />
				<p className="text-sm italic font-bold">DELETE</p>
			</div>
		</div>
	);
};

export default function Home() {
	const imgRef = useRef(null);
	const infoRef = useRef(null);

	const draft_types = ["2 Liter Keg (2L)", "4 Liter Keg (4L)", "5 Liter Keg (5L)", "Half Corny Keg (2.5gal)", "KeyKeg (10L)", "Three Gallon Corny Keg (3.0gal)", "Corny Keg (5gal)", "Sixth Barrel (5.17gal)", "KeyKeg (20L)", "Quarter Barrel (7.75gal)", "Slim Quarter Barrel (7.75gal)", "KeyKeg (30L)", "Conical Fermenter", "10 Gallon Keg (10gal)", "European Half Barrel (50L)", "Half Barrel (15.5gal)", "European Full Barrel (100L)"];
	const package_types = ["Can 12oz (single)", "Can 12oz (4-pack)", "Can 12oz (6-pack)", "Can 16oz (single)", "Can 16oz (4-pack)", "Can 19.2oz (single)", "Can 250ml (single)", "Can 250ml (4-pack)", "Can 330ml (single)", "Can 330ml (4-pack)", "Can 330ml (6-pack)", "Can 500ml (single)", "Can 500ml (4-pack)", "Bottle 12oz (single)", "Bottle 12oz (4-pack)", "Bottle 12oz (6-pack)", "Bottle 22oz (single)", "Bottle 22oz (4-pack)", "Bottle 330ml (single)", "Bottle 330ml (4-pack)", "Bottle 330ml (6-pack)", "Bottle 375ml (single)", "Bottle 500ml (single)", "Bottle 500ml (4-pack)", "Bottle 750ml (single)", "Bottle 1L (single)"];
	const styles = ["Pale Ale", "IPA", "NEIPA", "Stout", "Porter", "Lager", "Pilsner", "Wheat Beer", "Saison", "Barley Wine", "Bitter", "Blonde Ale", "Bock", "Dubbel", "Tripel", "Quad", "Lambic", "Gose", "Marzen/Oktoberfest", "Schwarzbier", "Vienna Lager", "Fruit Beer", "Herb and Spiced Beer", "Honey Beer", "Rye Beer", "Smoked Beer", "Vegetable Beer", "Wild Beer", "Wood-aged Beer", "Wine-Red", "Wine-White", "Wine-Rose", "Wine-Sparkling", "Wine-Dessert", "Wine-Fortified", "Mead-Traditional", "Mead-Melomel", "Mead-Cyser", "Mead-Pyment", "Mead-Metheglin", "Cider-Dry", "Cider-Sweet", "Cider-Fruit-flavored", "Cider-Spiced", "Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Brandy", "Liqueurs", "RTD-Whiskey", "RTD-Vodka", "RTD-Rum", "RTD-Gin", "RTD-Tequila", "RTD-Brandy", "RTD-Liqueurs"];

	const [types, setTypes] = useState(draft_types);
	const [pricings, setPricings] = useState([{ size: 1, price: 0 }]);
	const [imgSelected, SetImgSelected] = useState(false);

	const onImageAdd = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			const imgUrl = event.target.result;
			imgRef.current.src = imgUrl;
			SetImgSelected(true);
		};

		reader.readAsDataURL(file);
	};

	const onImageRemove = () => {
		imgRef.current.src = "https://via.placeholder.com/350x450";
		SetImgSelected(false);
	};

	const onCategoryChange = (e) => {
		if (e.target.value === "Draft") {
			setTypes(draft_types);
		} else {
			setTypes(package_types);
		}
	};

	const onAdd = () => {
		setPricings([...pricings, { size: 1, price: 0 }]);
	};

	const onRemove = (id) => {
		setPricings((pricings) => pricings.filter((price, index) => index !== id));
	};

	const onPriceChange = (id, value) => {
		let newPricings = pricings;
		newPricings[id].price = value;
		setPricings(newPricings);
	};

	const onSizeChange = (id, value) => {
		let newPricings = pricings;
		newPricings[id].size = value;
		setPricings(newPricings);
	};

	const onSave = () => {
		if (!imgRef.current || !imgSelected) {
			toast.warning("Select a Product Image.");
			return;
		}
		if (!infoRef.current.pname.value) {
			toast.warning("Name is required.");
			return;
		}
		if (!infoRef.current.pdescription.value) {
			toast.warning("Description is required.");
			return;
		}
		if (!infoRef.current.pproducer.value) {
			toast.warning("Producer is required.");
			return;
		}
		if (!infoRef.current.pabv.value) {
			toast.warning("ABV is required.");
			return;
		}
		if (!infoRef.current.pcategory.value) {
			toast.warning("Category is required.");
			return;
		}
		if (!infoRef.current.ptype.value) {
			toast.warning("Type is required.");
			return;
		}
		if (!infoRef.current.pstyle.value) {
			toast.warning("Style is required.");
			return;
		}
		if (!infoRef.current.pquantity.value) {
			toast.warning("Quantity is required.");
			return;
		}
		console.log({
			image: imgRef.current.src,
			name: infoRef.current.pname.value,
			description: infoRef.current.pdescription.value,
			producer: infoRef.current.pproducer.value,
			abv: infoRef.current.pabv.value,
			category: infoRef.current.pcategory.value,
			type: infoRef.current.ptype.value,
			style: infoRef.current.pstyle.value,
			quantity: infoRef.current.pquantity.value,
			pricing: JSON.stringify(pricings),
		});
	};

	const onDelete = () => {};

	return (
		<div className="main-container">
			<SideMenu />
			<div className="overflow-hidden">
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
										<label htmlFor="uploadImg" className="bg-white rounded-lg w-[100px] h-7 grid place-items-center cursor-pointer">
											ADD
										</label>
										<input type="file" id="uploadImg" className="opacity-0 absolute -z-10" onChange={onImageAdd} />
										<div className="bg-white rounded-lg w-[100px] h-7 grid place-items-center cursor-pointer" onClick={onImageRemove}>
											REMOVE
										</div>
									</div>
								</div>
							</div>
							<div className="col-span-2 md:col-span-3 grid gap-4">
								<form className="bg-[#060B28] rounded-[20px] px-8 py-4" ref={infoRef}>
									<p className="text-lg font-bold text-white mb-2">Product Information</p>
									<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
										<div className="sm:col-span-2">
											<p className="text-xs font-bold">Product Name</p>
											<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs" name="pname" placeholder="Brazil Loves New England" />
										</div>
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
									<div className="grid sm:grid-cols-2 gap-4 mb-2">
										<div className="flex flex-col">
											<p className="text-xs font-bold">Description</p>
											<textarea className="w-full flex-auto text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs resize-none" name="pdescription" placeholder="Some initial Bold text"></textarea>
										</div>
										<div>
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
										</div>
									</div>
									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<p className="text-xs font-bold">Producer</p>
											<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs" name="pproducer" placeholder="Ellipsis Brewing" />
										</div>
										<div>
											<p className="text-xs font-bold">Quantity</p>
											<NumericInput className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1" min={1} max={999} precision={0} name="pquantity" noStyle strict />
										</div>
									</div>
								</form>
								<div className="bg-[#060B28] rounded-[20px] px-8 py-4">
									<p className="text-lg font-bold text-white mb-2">Pricing</p>
									{pricings.map((pricing, index) => (
										<PricingRow no={index} onSizeChange={onSizeChange} onPriceChange={onPriceChange} size={pricing.size} price={pricing.price} onDelete={onRemove} />
									))}
									<div className="bg-white rounded-full w-[74px] h-7 grid place-items-center text-[10px] text-[#0F1535] font-black cursor-pointer" onClick={onAdd}>
										ADD
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-8 text-xs text-[#0F1535] font-bold">
							<div className="bg-white rounded-xl h-9 grid place-items-center cursor-pointer" onClick={onSave}>
								SAVE
							</div>
							<div className="bg-white rounded-xl h-9 grid place-items-center cursor-pointer" onClick={onDelete}>
								DELETE
							</div>
						</div>
					</div>
				</MainContent>
			</div>
		</div>
	);
}
