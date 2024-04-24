"use client";
import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileDevice, setMobileDevice] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between h-14 border-b">
        <h1>Dyaipayan</h1>
        <ul className="flex items-center space-x-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
