"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Page = () => {
  const [theme, setTheme] = useState(null);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    fetch("/api/set-cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ theme: newTheme }),
    }).then(() => {
      setTheme(newTheme);
    });
  };

  useEffect(() => {
    const currentTheme = Cookies.get("theme") || "light";
    setTheme(currentTheme);
  }, []);

  return (
    <section
      className={"flex justify-center items-center min-h-[calc(100vh-61px)]"}
    >
      <div
        className={`text-center p-10 w-80 ${
          theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"
        } border rounded-lg transition-all duration-300`}
      >
        <h3
          className={`text-xl font-medium ${
            theme === "dark" ? "text-white" : "text-gray-900"
          } transition-all duration-300`}
        >
          Current Theme: {theme}
        </h3>
        <button
          className="bg-indigo-600 text-white mt-5 py-3 px-5 rounded-full"
          onClick={changeTheme}
        >
          Change Theme
        </button>
      </div>
    </section>
  );
};

export default Page;
