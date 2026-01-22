"use client";

// import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  // const error = useSearchParams().get("error");

  return (
    <div className="m-5 p-5">
      <h1 className="text-xl text-center py-12 font-bold">Oups! something went wrong!</h1>
      {/* <p>{error}</p> */}
    </div>
  );
}
