import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";

export default function () {
	return (
		<div className="main-container">
			<SideMenu />
			<div className="overflow-hidden">
				<TopNavbar />
				<MainContent>
					<div className="container space-y-6">
						<div className="bg-[#060B28] rounded-[20px] p-6">
							<p className="text-lg font-bold text-white mb-6">Basic Info</p>
							<div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
								<div>
									<p className="text-xs font-bold mb-2">First Name</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. Michael" />
								</div>
								<div>
									<p className="text-xs font-bold mb-2">Last Name</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. Jordan" />
								</div>
							</div>
							<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 text-white mb-4">
								<div>
									<p className="text-xs font-bold mb-2">Gender</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Male" />
								</div>
								<div>
									<p className="text-xs font-bold mb-2">Birth Date</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="February" />
								</div>
								<div>
									<p className="h-0 sm:h-4 font-bold mb-2"></p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="14" />
								</div>
								<div>
									<p className="h-0 sm:h-4 font-bold mb-2"></p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="2001" />
								</div>
							</div>
							<div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
								<div>
									<p className="text-xs font-bold mb-2">Email Address</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. example@address.com" />
								</div>
								<div>
									<p className="text-xs font-bold mb-2">Confirm Email</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. example@address.com" />
								</div>
							</div>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white mb-4">
								<div className="col-span-2">
									<p className="text-xs font-bold mb-2">Address</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="42 Wallaby Way" />
								</div>
								<div className="col-span-2 xs:col-span-1">
									<p className="text-xs font-bold mb-2">Your Location</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="City" />
								</div>
								<div className="col-span-2 xs:col-span-1">
									<p className="h-0 xs:h-4 font-bold mb-2"></p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="State" />
								</div>
							</div>
							<div className="grid grid-cols-1 xs:grid-cols-2 gap-6 text-white mb-4">
								<div>
									<p className="text-xs font-bold mb-2">Language</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="English" />
								</div>
								<div>
									<p className="text-xs font-bold mb-2">Phone Number</p>
									<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="+1 941 867 5309" />
								</div>
							</div>
						</div>
						<div className="bg-[#060B28] rounded-[20px] p-6">
							<p className="text-lg font-bold text-white mb-6">Change Password</p>
							<div className="text-white mb-4">
								<p className="text-xs font-bold mb-2">Current Password</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Current Password" />
							</div>
							<div className="text-white mb-4">
								<p className="text-xs font-bold mb-2">New Password</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="New Password" />
							</div>
							<div className="text-white mb-4">
								<p className="text-xs font-bold mb-2">Confirm New Password</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Confirm New Password" />
							</div>
							<div>
								<p className="text-lg font-bold text-white mb-2">Password requirements</p>
								<p className="text-[#A0AEC0]">Please follow this guide for a strong password</p>
								<ul className="text-[#A0AEC0] text-sm list-inside list-[circle] pl-3 mb-2">
									<li>One special characters</li>
									<li>Min 6 characters</li>
									<li>One number (2 are recommended)</li>
									<li>Change it often</li>
								</ul>
							</div>
							<div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto">UPDATE PASSWORD</div>
						</div>
						<div className="bg-[#060B28] rounded-[20px] p-6">
							<p className="text-lg font-bold text-white mb-2">Accounts</p>
							<p className="text-sm text-[#A0AEC0] mb-2">Here you can add and manage your employee permissions</p>
							<div className="pl-4">
								<div className="py-4 border-b">
									<p className="text-white font-bold">New Employee</p>
									<p className="text-sm text-[#A0AEC0] mb-2">Send an invite here to add an authorized employee.</p>
									<div className="relative">
										<input className="w-full rounded-lg bg-[#0e1535] text-white placeholder:text-[#A0AEC0] px-4 py-3 mb-4 xs:mb-0" placeholder="eg. example@adde" />
										<div className="xs:absolute top-0 right-1.5 bottom-0 grid place-items-center">
											<div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto">SEND INVITE</div>
										</div>
									</div>
								</div>
								<div className="py-4 border-b">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-white font-bold">Employee 1</p>
											<p className="text-sm text-[#A0AEC0] mb-2">John Smith</p>
										</div>
										<div className="flex gap-2 items-center">
											<p className="text-[#A0AEC0] text-xs">Enabled</p>
										</div>
									</div>
								</div>
								<div className="py-4 border-b">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-white font-bold">Employee 2</p>
											<p className="text-sm text-[#A0AEC0] mb-2">John Doe</p>
										</div>
										<div className="flex gap-2 items-center">
											<p className="text-[#A0AEC0] text-xs">Enabled</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MainContent>
			</div>
		</div>
	);
}
