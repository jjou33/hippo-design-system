import { darkModeState } from "@/atoms/themeAtom";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { useRecoilState } from "recoil";
import IconButton from "./IconComponent";
type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
const Header: FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
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
    <header className="flex h-16 items-center justify-between border-b px-4 lg:p-10">
      <IconButton
        onClick={() => setIsSidebarOpen((t) => !t)}
        className="p-2"
        Icon={isSidebarOpen ? AiOutlineClose : AiOutlineMenu}
      />
      <Link href="/">
        <h1 className="text-3xl font-medium text-reverseGray-100">HIPPO_DEV</h1>
      </Link>
      <IconButton
        onClick={toggleTheme}
        className="text-center"
        Icon={isDarkMode ? FiMoon : FiSun}
      />
    </header>
  );
};

export default Header;
