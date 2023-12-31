"use client";
import { useState } from "react";

const Page = () => {
  const [token, setToken] = useState(
    "LVlG6g5LjLWmvVUc7SWO!hyXS/ryxFDFkTiexzTCn-hsJhhjhUTUIKhikf"
  );

  const addBearer = () => {
    fetch("/api/authorization", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setToken(res.token);
      });
  };

  return (
    <section
      className={
        "flex justify-center items-center min-h-[calc(100vh-61px)] p-5"
      }
    >
      <div className="text-center p-10 w-full max-w-xl bg-white border rounded-lg">
        <h3 className="font-bold text-gray-800 text-xl mb-3">
          Authorization Token
        </h3>
        <p className="font-medium break-words text-gray-500">{token}</p>
        <button
          className="bg-indigo-600 text-white mt-5 py-3 px-5 rounded-full disabled:opacity-50 disabled:pointer-events-none inline-block"
          onClick={addBearer}
          disabled={token.startsWith("Bearer")}
        >
          Send Token
        </button>
        <p className="text-[15px] text-gray-400 font-medium mt-3">
          {token.startsWith("Bearer")
            ? "Bearer prefix added to token"
            : "Click Send Token to prefix with Bearer"}
        </p>
      </div>
    </section>
  );
};

export default Page;
