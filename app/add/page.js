"use client";

import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export default function Home() {
	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container">
					<div className="bg-[url('/images/banner_add.png')] bg-cover bg-center h-[180px] rounded-[20px] mb-4"></div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
						<div className="col-span-2">
							<div className="bg-[#060B28] rounded-[20px] p-8">
								<p className="text-lg font-bold text-white mb-4">Product Image</p>
								<img src="/images/item.jpg" alt="item" className="w-full mb-6" />
								<div className="flex justify-center gap-4">
									<div className="bg-white rounded-xl w-[100px] h-9 grid place-items-center text-[10px] text-[#0F1535] font-black">ADD</div>
									<div className="bg-white rounded-xl w-[100px] h-9 grid place-items-center text-[10px] text-[#0F1535] font-black">REMOVE</div>
								</div>
							</div>
						</div>
						<div className="col-span-2 md:col-span-3 grid gap-4">
							<div className="bg-[#060B28] rounded-[20px] px-8 py-4">
								<p className="text-lg font-bold text-white mb-2">Product Information</p>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-white">
									<div>
										<p className="text-xs font-bold">Product Name</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="Brazil Loves New England" />
										<p className="text-xs font-bold">Description</p>
										<textarea className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs resize-none h-[74px] mb-2" placeholder="Some initial Bold text"></textarea>
										<p className="text-xs font-bold">Producer</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="Ellipsis Brewing" />
									</div>
									<div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold">ABV</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="5.8" />
											</div>
											<div>
												<p className="text-xs font-bold">Category</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="Draft" />
											</div>
										</div>
										<p className="text-xs font-bold">Type</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="Slim" />
										<p className="text-xs font-bold">Style</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="NEIPA" />
										<p className="text-xs font-bold">Quantity</p>
										<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="2" />
									</div>
								</div>
							</div>
							<div className="bg-[#060B28] rounded-[20px] px-8 py-4">
								<p className="text-lg font-bold text-white mb-2">Pricing</p>
								<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
									<div className="flex-auto">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
										</div>
									</div>
									<div className="flex text-white items-center justify-end xs:justify-start gap-1">
										<IconPencil size={16} />
										<p className="text-sm italic">EDIT</p>
										<IconTrash size={16} className="text-red-500" />
										<p className="text-red-500 text-sm italic">DELETE</p>
									</div>
								</div>
								<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
									<div className="flex-auto">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
										</div>
									</div>
									<div className="flex text-white items-center justify-end xs:justify-start gap-1">
										<IconPencil size={16} />
										<p className="text-sm italic">EDIT</p>
										<IconTrash size={16} className="text-red-500" />
										<p className="text-red-500 text-sm italic">DELETE</p>
									</div>
								</div>
								<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
									<div className="flex-auto">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
										</div>
									</div>
									<div className="flex text-white items-center justify-end xs:justify-start gap-1">
										<IconPencil size={16} />
										<p className="text-sm italic">EDIT</p>
										<IconTrash size={16} className="text-red-500" />
										<p className="text-red-500 text-sm italic">DELETE</p>
									</div>
								</div>
								<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
									<div className="flex-auto">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
										</div>
									</div>
									<div className="flex text-white items-center justify-end xs:justify-start gap-1">
										<IconPencil size={16} />
										<p className="text-sm italic">EDIT</p>
										<IconTrash size={16} className="text-red-500" />
										<p className="text-red-500 text-sm italic">DELETE</p>
									</div>
								</div>
								<div className="flex flex-col xs:flex-row gap-x-6 mb-2 xs:mb-0">
									<div className="flex-auto">
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
											<div>
												<p className="text-xs font-bold text-white">Size</p>
												<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-3 py-1 text-xs mb-2" placeholder="1 ounce" />
											</div>
										</div>
									</div>
									<div className="flex text-white items-center justify-end xs:justify-start gap-1">
										<IconPencil size={16} />
										<p className="text-sm italic">EDIT</p>
										<IconTrash size={16} className="text-red-500" />
										<p className="text-red-500 text-sm italic">DELETE</p>
									</div>
								</div>
								<div className="bg-white rounded-full w-[74px] h-7 grid place-items-center text-[10px] text-[#0F1535] font-black">ADD</div>
							</div>
						</div>
					</div>
				</div>
			</MainContent>
		</>
	);
}
