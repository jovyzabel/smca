import {createClient} from "@supabase/supabase-js";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
    const {fileName} = await request.json();

    const { data, error } = await supabase.storage
      .from("Store_File")
      .createSignedUploadUrl(`upload/${Date.now()}-${fileName}`);

    if (error) {
        return new NextResponse({ error: error.message}, {status: 500});
    }

    return NextResponse.json({ url: data.signedUrl, path: data.path });
}