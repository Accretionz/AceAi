"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menuItems } from "../_routes/NavBarRoutes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function NavBar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-40 flex justify-center w-[98%] max-w-[1100px]">
      <header className="relative z-40 flex flex-col w-full bg-black/80 backdrop-blur-md border border-white/10 rounded-[20px] overflow-visible">
        <div className="flex w-full items-center h-[67px] rounded-[20px] px-8">
          <div className="flex items-center justify-between w-full gap-8">
            {/* Logo */}
            <div className="cursor-pointer transition-opacity hover:opacity-80">
              <Link
                className="flex items-center justify-center w-[38px] h-[38px]"
                href="/"
              >
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-row items-center justify-center flex-1 gap-8">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative flex text-medium whitespace-nowrap items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                >
                  <Link
                    className="text-white/70 text-[17px] inline-flex items-center no-underline hover:text-white transition-colors duration-200 font-medium"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Login and Sign-up buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="h-11 px-5 text-[17px] font-medium text-white border border-white/20 hover:border-[#00beef] hover:text-[#00beef] hover:bg-transparent transition-all duration-200 rounded-full group"
              >
                <Link href="https://calendly.com/samhajj/meet" target="_blank">
                  <div className="flex items-center">
                    <span>Log in</span>
                    <div className="ml-2 px-2 py-0.5 text-sm rounded-full bg-white/10 group-hover:bg-[#00beef]/10 transition-colors duration-200">
                      L
                    </div>
                  </div>
                </Link>
              </Button>
              <Link href="https://calendly.com/samhajj/meet" target="_blank">
                <Button className="h-11 px-5 text-[17px] font-medium bg-white text-black border border-transparent hover:bg-transparent hover:text-[#00beef] hover:border-[#00beef] transition-all duration-200 rounded-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Submenu */}
        {menuItems.map((item) =>
          item.subItems && hoveredItem === item.name ? (
            <div
              key={item.name}
              className="absolute left-0 w-full top-full pt-3"
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full bg-black/80 backdrop-blur-md border border-white/10 rounded-[20px]">
                <div className="px-4 py-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      className="block group"
                    >
                      <div className="flex flex-col gap-1 px-3 py-2 m-1 rounded-lg hover:bg-white/5 transition-all duration-200">
                        <span className="text-white/90 text-[17px] font-medium group-hover:text-[#00beef] transition-colors duration-200">
                          {subItem.name}
                        </span>
                        <span className="text-white/50 text-[15px] group-hover:text-[#00beef]/70 transition-colors duration-200">
                          {subItem.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null
        )}
      </header>
    </nav>
  );
}

export default NavBar;
