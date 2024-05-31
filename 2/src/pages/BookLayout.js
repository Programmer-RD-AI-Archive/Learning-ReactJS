import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  const [number, setNumber] = useState("");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Outlet context={{ hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </>
  );
}
