import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import IconButton from './IconComponent';
type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
const Header: FC<HeaderProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:p-10">
      <IconButton
        onClick={() => setIsSidebarOpen((t) => !t)}
        className="p-2"
        Icon={isSidebarOpen ? AiOutlineClose : AiOutlineMenu}
      />

      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600">HIPPO_DEV</h1>
      </Link>
      <IconButton
        Icon={BsRobot}
        component={Link}
        href="search"
        className="p-2"
      />
    </header>
  );
};

export default Header;
