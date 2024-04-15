import { supabase } from "@/lib/supabase/supabase-client";

export async function POST(req) {
	// const reqData = await req.json();
	const { resData } = await supabase.from("products").select();
	return new Response(JSON.stringify(resData));
}
