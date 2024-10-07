"use client";

export const AddProduct = () => {
  const onAddProduct = () => {
    fetch("/api/add-product", { method: "POST" });
  };
  return (
    <div>
      <button onClick={onAddProduct}>Add Product</button>
    </div>
  );
};
