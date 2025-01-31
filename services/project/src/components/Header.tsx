import { darkModeState } from "@/atoms/themeAtom";
import { cn } from "@/utils/style";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useRecoilState } from "recoil";
import IconButton from "./IconComponent";
type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isEndHeroSection: boolean;
};
const Header: FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isEndHeroSection,
}) => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleTheme = () => {
    const body = document.body;
    if (body.classList.contains("theme-dark")) {
      body.classList.remove("theme-dark");
      setIsDarkMode(false);
    } else {
      body.classList.add("theme-dark");
      setIsDarkMode(true);
    }
  };
  return (
    <header
      className={cn(
        "z-20 mt-3 flex h-16 items-center justify-center px-4 lg:p-10",
        isEndHeroSection
          ? isSidebarOpen
            ? "animate-fade-in fixed w-[calc(100%-250px)] backdrop-blur-sm"
            : "animate-fade-in fixed w-full backdrop-blur-sm"
          : "absolute w-full",
      )}
    >
      <div
        className={cn(
          "relative flex h-20 items-center justify-between rounded-2xl px-5",
          isEndHeroSection
            ? isSidebarOpen
              ? "w-full border bg-white/90 text-black"
              : "w-3/4 border bg-white/90 text-black"
            : "text-deepGray w-full",
        )}
      >
        <IconButton
          onClick={() => setIsSidebarOpen((t) => !t)}
          className="p-2"
          Icon={isSidebarOpen ? AiOutlineClose : AiOutlineMenu}
        />
        <Link href="/">
          <h1
            className={cn(
              "text-xl font-medium text-black",
              isEndHeroSection ? "text-black" : "text-deepGray",
            )}
          >
            HIPPO_DEV
          </h1>
        </Link>
        <IconButton
          onClick={toggleTheme}
          className="text-center"
          Icon={isDarkMode ? FiMoon : FiSun}
        />
      </div>
    </header>
  );
};

export default Header;
