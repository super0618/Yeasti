import { supabase } from "@/lib/supabase/supabase-client";
const formidable = require("formidable");
// import formidable from "formidable";

export async function POST(req, res) {
	// const form = new formidable.IncomingForm();
	// const [fields, files] = await form.parse(req);

	// console.log(fields, files);

	const reqData = await req.formData();

	console.log(reqData);

	return res.json({ success: true });

	// const { data, error } = await supabase.storage.from("avatars").upload("public/avatar1.png", avatarFile, {
	// 	cacheControl: "3600",
	// 	upsert: false,
	// });
}
