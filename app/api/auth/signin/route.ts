import { supabase } from "@/lib/supabase/supabase-client";
const sign = require("jwt-encode");
const bcrypt = require("bcryptjs");

export async function POST(req: Request) {
	const reqData = await req.json();
	let { data, error } = await supabase.from("users").select().eq("email", reqData.email).limit(1).single();

	if (error) {
		return Response.json({ success: false, data: { message: "User does not exist" } });
	}

	if (!bcrypt.compareSync(reqData.password, data.password)) {
		return Response.json({ success: false, data: { message: "Password does not match" } });
	}

	data.password = reqData.password;
	const jwt_token = sign(data, "secret");
	return Response.json({ success: true, data: jwt_token });
}
