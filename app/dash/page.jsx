export default function () {
	return (
		<>
			<div className="fixed inset-0 bg-[url('/images/dashbg.png')] bg-center -z-10"></div>
			<div className="grid" style={{ gridTemplateColumns: "264px auto" }}>
				<div className="p-3">
					<div className="bg-gradient-to-b from-[#060B26ee] to-[#1A1F3711] rounded-2xl h-[1000px] flex flex-col justify-between p-4">
						<div className="text-white">
							<div className="text-sm italic font-bold text-center py-4 border-b border-[#ccc] mb-4">VISION UI PRO</div>
							<div className="text-white">Dashboard</div>
						</div>
						<img src="/images/branddocs.png" />
					</div>
				</div>
				<div className="h-[1000px]">123</div>
			</div>
		</>
	);
}
