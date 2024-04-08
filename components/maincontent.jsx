export default function ({ children }) {
	return (
		<div className="mt-[44px] ml-[76px] bg-[#1D203E] p-6 overflow-x-hidden overflow-y-auto" style={{ minHeight: "calc(100vh - 44px)" }}>
			{children}
		</div>
	);
}
