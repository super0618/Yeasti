"use client";

import SideMenu from "../../components/sideMenu";
import TopNavbar from "../../components/topnavbar";
import MainContent from "../../components/maincontent";
import Banner from "../../components/banner";

export default function Home() {
	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container">
					<Banner bgImgSrc="/images/banner1.jpg" title="Your Digital Menu" border />
					<Banner bgImgSrc="/images/banner2.jpg" title="Get QR Code" border />
					<Banner bgImgSrc="/images/banner3.jpg" title="Get Menu" border />
				</div>
			</MainContent>
		</>
	);
}
