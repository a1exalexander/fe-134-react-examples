export default async (req, context) => {
  const key = process.env.API_KEY;
  return new Response(`Hello, world! ${key}`);
};
