import Head from "next/head";
import Meta from "./meta";

export default function ({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
