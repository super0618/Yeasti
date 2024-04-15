import { supabase } from "@/lib/supabase/supabase-client";

export async function POST(req) {
	const reqData = await req.json();
	let { data } = await supabase.from("products").select().eq("created_by", reqData.id);
	if (!data) data = [];
	return new Response(JSON.stringify(data));
}
