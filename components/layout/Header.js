import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useTheme } from "next-themes";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const menu = [
    { title: "archive", path: "/archive" },
    { title: "about", path: "/about" },
  ];
  if (!mounted) return null;

  console.log(theme);
  return (
    <div>
      <header className="mt-12">
        <ul className="flex float-right text-2xl">
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path} passHref={true}>
                <li
                  className={`font-bold m-2 cursor-pointer ${
                    router.pathname === item.path
                      ? "text-blue-500"
                      : "hover:bg-yellow-300 hover:text-black"
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            toggle
          </button>

          <li className="font-bold m-2">darkmode</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
