import SideMenu from "@/components/sideMenu";
import TopNavbar from "@/components/topnavbar";
import MainContent from "@/components/maincontent";

export default function () {
	return (
		<>
			<div className="radial-bg"></div>
			<SideMenu />
			<TopNavbar />
			<MainContent>
				<div className="container space-y-6">
					<div className="bg-[#060B28] rounded-[20px] p-6">
						<p className="text-lg font-bold text-white mb-6">Basic Info</p>
						<div className="grid grid-cols-2 gap-6 text-white mb-6">
							<div>
								<p className="text-xs font-bold mb-2">First Name</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. Michael" />
							</div>
							<div>
								<p className="text-xs font-bold mb-2">Last Name</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. Jordan" />
							</div>
						</div>
						<div className="grid grid-cols-4 gap-6 text-white mb-6">
							<div>
								<p className="text-xs font-bold mb-2">Gender</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Male" />
							</div>
							<div>
								<p className="text-xs font-bold mb-2">Birth Date</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="February" />
							</div>
							<div>
								<p className="h-4 font-bold mb-2"></p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="February" />
							</div>
							<div>
								<p className="h-4 font-bold mb-2"></p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="February" />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6 text-white mb-6">
							<div>
								<p className="text-xs font-bold mb-2">Email Address</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. example@address.com" />
							</div>
							<div>
								<p className="text-xs font-bold mb-2">Confirm Email</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="eg. example@address.com" />
							</div>
						</div>
						<div className="grid grid-cols-4 gap-6 text-white mb-6">
							<div className="col-span-2">
								<p className="text-xs font-bold mb-2">Address</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="42 Wallaby Way" />
							</div>
							<div>
								<p className="text-xs font-bold mb-2">Your Location</p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="City" />
							</div>
							<div>
								<p className="h-4 font-bold mb-2"></p>
								<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="State" />
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6 text-white mb-6">
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
						<div className="text-white mb-6">
							<p className="text-xs font-bold mb-2">Current Password</p>
							<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Current Password" />
						</div>
						<div className="text-white mb-6">
							<p className="text-xs font-bold mb-2">New Password</p>
							<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="New Password" />
						</div>
						<div className="text-white mb-6">
							<p className="text-xs font-bold mb-2">Confirm New Password</p>
							<input className="w-full text-[#e1e1e1] bg-[#0F1535] rounded-2xl border border-[#6271c2] px-4 py-3 text-xs" placeholder="Confirm New Password" />
						</div>
						<div className="flex justify-between">
							<div>
								<p className="text-lg font-bold text-white mb-2">Password requirements</p>
								<p className="text-[#A0AEC0]">Please follow this guide for a strong password</p>
								<ul className="text-[#A0AEC0] text-sm list-inside list-[circle] pl-3">
									<li>One special characters</li>
									<li>Min 6 characters</li>
									<li>One number (2 are recommended)</li>
									<li>Change it often</li>
								</ul>
							</div>
							<div className="flex items-end justify-end">
								<div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto">UPDATE PASSWORD</div>
							</div>
						</div>
					</div>
					<div className="bg-[#060B28] rounded-[20px] p-6">
						<p className="text-lg font-bold text-white mb-2">Accounts</p>
						<p className="text-sm text-[#A0AEC0] mb-2">Here you can add and manage your employee permissions</p>
						<div className="pl-8">
							<div className="py-4 border-b">
								<p className="text-white font-bold">New Employee</p>
								<p className="text-sm text-[#A0AEC0] mb-2">Send an invite here to add an authorized employee.</p>
								<div className="rounded-lg bg-[#0e1535] flex items-center justify-between h-[50px] px-2">
									<p className="px-2 text-[#A0AEC0] text-sm">eg. example@adde</p>
									<div className="bg-white rounded-xl w-32 h-9 grid place-items-center text-[10px] text-[#0F1535] font-black ml-auto">SEND INVITE</div>
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
										<input className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#0075ff] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]" type="checkbox" role="switch" />
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
										<input className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#0075ff] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]" type="checkbox" role="switch" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</MainContent>
		</>
	);
}
