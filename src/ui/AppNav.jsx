"use client";
import DarkModeToggler from "@/components/DarkModeToggler";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const AppNav = () => {
  const path = usePathname();
  // console.log(path);
  const session = useSession();

  return (
    <header>
      <nav className="flex justify-between py-4 gap-2 items-center">
        <div>
          <Link className="text-3xl bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent font-semibold" href="/">
            NextCrushCourse
          </Link>
        </div>
        <div className="ml-auto">
          <DarkModeToggler />
        </div>
        <ul className="flex gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <Link className={`${link.url === path && "active"} hover:text-green-700 transition-all duration-100`} href={link.url}>
                {link.title} {}
              </Link>
            </li>
          ))}
        </ul>
        {session.status === "authenticated" && (
          <div className="flex items-center">
            <button onClick={signOut} className="capitalize px-4 py-2 bg-green-700 rounded-md">
              logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppNav;
