import { useRouter } from "next/router";
import React from "react";

export default function CategoryPage() {
  const route = useRouter();
  const NullValue = () => {
    return <span>Tidak ada id</span>;
  };
  return (
    <div>
      <h1>Category</h1>
      <p>id Category: {`${!route.query.idCategory ? "tidak ada data" : route.query.idCategory}`}</p>
      <p>id Category: {route.query.idCategory || <NullValue />}</p>
      <p>id Category: {route.query.idCategory ?? "Tidak ada id"}</p>
    </div>
  );
}
