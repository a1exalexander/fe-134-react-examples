import { AddProduct } from "@/components/AddProduct/AddProduct";
import { createClient } from "../utils/supabase/client";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.from("Products").select();

  return (
    <>
      <h1>Hello</h1>
      <ul>
        {data?.map((product) => {
          return (
            <li key={product.id}>
              <p>{product.title}</p>
              <span>{product.price}</span>
            </li>
          );
        })}
      </ul>

      <AddProduct />
    </>
  );
}
