import Link from "next/link";
import { IconSettings, IconBell } from "@tabler/icons-react";

export default function () {
	return (
		<div className="fixed top-0 left-[72px] right-0 h-11 rounded-tr-2xl grid grid-cols-3 text-white text-[13px] bg-[#2C2F48] px-6 z-50">
			<div></div>
			<div className="flex items-center justify-center">Yeasti</div>
			<div className="flex items-center justify-end gap-8 text-[#EBEBF5A0]">
				<IconBell size={20} />
				<Link href="/settings">
					<IconSettings size={20} />
				</Link>
			</div>
		</div>
	);
}
