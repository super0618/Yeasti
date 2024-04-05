export default function ({ bgImgSrc, num, title, description, members }) {
	return (
		<div className="basis-[293px] h-[208px] grow-0 shrink-0 rounded-[20px] bg-gradient-to-br from-[#01B7C5] to-[#782C96] bg-gradient p-[1px]" style={{ boxShadow: "0 10px 15px #0003" }}>
			<div className="relative h-full rounded-[20px] bg-cover bg-center" style={{ background: `center / cover url(${bgImgSrc})` }}>
				<img src="/images/overlay.svg" alt="overlay" width="100%" className="absolute bottom-0 rounded-b-[20px] left-0" />
				<div className="absolute top-[54px] left-1/2 -translate-x-1/2 text-[32px] font-bold text-white">{num}</div>
				<p className="absolute top-24 px-2 text-[22px] text-white font-semibold">{title}</p>
				<p className="absolute top-32 px-2 text-[13px] text-[#ffffff8b]">{description}</p>
				<div className="absolute bottom-2 left-0 right-0 px-2 text-xs text-[#ffffff60] flex justify-between">
					{members.map((member, index) => (
						<div key={index}>{member}</div>
					))}
				</div>
			</div>
		</div>
	);
}
