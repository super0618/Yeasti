import Link from "next/link";

export default function () {
	return (
		<div className="fixed top-0 left-0 bottom-0 w-[72px] bg-[url('/images/bg-sidemenu.svg')] bg-right-top bg-no-repeat bg-[#1D203E4A] rounded-l-2xl z-50">
			<Link href="/">
				<img src="/images/logo.svg" alt="logo" className="block mx-auto mt-4 mb-[72px]" />
			</Link>
			<Link href="#">
				<img src="/images/icon_beer.svg" alt="menu" className="menuitem block mx-auto rounded-full mb-6" />
			</Link>
			<Link href="#">
				<img src="/images/icon_bottle.svg" alt="menu" className="menuitem block mx-auto rounded-full mb-6" />
			</Link>
			<Link href="#">
				<img src="/images/icon_menu.svg" alt="menu" className="menuitem block mx-auto rounded-full mb-6" />
			</Link>
			<Link href="#">
				<img src="/images/icon_add.svg" alt="add" className="menuitem block mx-auto rounded-full mb-6" />
			</Link>
			<img src="/images/selected.svg" alt="selected" className="absolute left-0 mx-auto hidden" />
		</div>
	);
}
