"use client";

import { cn } from "@/utils/style";
import { FC } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
// import { useRecoilState } from "recoil";

import Link from "next/link";
import IconButton from "./IconComponent";
import { useSidebar } from "./Providers";

const Header: FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  // const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  // const toggleTheme = () => {
  //   const body = document.body;
  //   if (body.classList.contains("theme-dark")) {
  //     body.classList.remove("theme-dark");
  //     setIsDarkMode(false);
  //   } else {
  //     body.classList.add("theme-dark");
  //     setIsDarkMode(true);
  //   }
  // };
  return (
    <header>
      <IconButton
        onClick={() => setIsOpen((t) => !t)}
        className="p-2"
        Icon={isOpen ? AiOutlineClose : AiOutlineMenu}
      />
      <Link href="/">
        <h1 className={cn("text-xl font-medium text-black text-deepGray")}>
          HIPPO_DEV
        </h1>
      </Link>
      <IconButton
        onClick={() => {
          console.log("DARK");
        }}
        className="text-center"
        // Icon={isDarkMode ? FiMoon : FiSun}
        Icon={FiSun}
      />
    </header>
  );
};

export default Header;
