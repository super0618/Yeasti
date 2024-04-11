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
					<Banner bgImgSrc="/images/banner1.jpg" title="Your Digital Menu" />
				</div>
			</MainContent>
		</>
	);
}
