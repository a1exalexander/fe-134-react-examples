import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  const supabase = createClient();
  console.log('POST req');
  
  await supabase.from("Products").insert({
    title: `New Item ${Date.now()}`,
    price: 99,
  });
}
