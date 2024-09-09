import { products } from "../../data";

export const loader = async ({ params }) => {
  const product = products.find(({ slug }) => slug === params.slug);
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return product;
};
