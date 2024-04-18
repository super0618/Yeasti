interface proptype {
	bgImgSrc: string;
	num: any;
	title: string;
	description: string;
	members: any;
}

export default function ({ bgImgSrc, num, title, description, members }: proptype) {
	return (
		<div className="aspect-[1.41] mx-auto  shrink-0 rounded-[20px] bg-gradient-to-br from-[#01B7C5] to-[#782C96] bg-gradient p-[1px]" style={{ boxShadow: "0 10px 15px #0003" }}>
			<div className="relative h-full rounded-[20px]" style={{ background: `center / cover url(${bgImgSrc})` }}>
				<img src="/images/overlay.svg" alt="overlay" width="100%" className="absolute bottom-0 rounded-b-[20px] left-0" />
				<div className="absolute top-[32%] left-0 right-0 bottom-0">
					<p className="text-[28px] leading-[28px] h-[28px] text-center font-bold text-white mb-3">{num ? num : null}</p>
					<p className={`px-4 text-[20px] leading-[20px] text-white font-semibold mb-2 ${num === "+" ? "text-center" : ""}`}>{title}</p>
					<p className={`px-4 text-[13px] leading-[13px] text-[#ffffff8b] ${num === "+" ? "text-center" : ""}`}>{description}</p>
				</div>
				<div className="absolute bottom-2 left-0 right-0 px-4 text-[12px] leading-[12px] text-[#ffffff60] flex justify-between">
					{members.map((member: any, index: number) => (
						<div key={index}>{member}</div>
					))}
				</div>
			</div>
		</div>
	);
}
