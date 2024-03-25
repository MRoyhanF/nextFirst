import { useRouter } from "next/router";
import React from "react";

export default function CoursePage() {
  const route = useRouter();
  console.log(route)
  const NullValue = () => {
    return <span>Tidak ada id</span>;
  };
  return (
    <div>
      <h1>Course</h1>
      <div>
        <p>id Category: {route.query.idCategory || <NullValue />}</p>
        <p>id Course: {route.query.idCourse || <NullValue />}</p>
      </div>
      {/* <p>id Category: {`${!route.query.idCourse ? "tidak ada data" : route.query.idCourse}`}</p>
      <p>id Course: {route.query.idCourse || <NullValue />}</p>
      <p>id Course: {route.query.idCourse ?? "Tidak ada id"}</p> */}
    </div>
  );
}
