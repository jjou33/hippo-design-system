import { darkModeState } from "@/atoms/themeAtom";
import { IconSet } from "@/constant/iconSet";
import { useNestedCategories } from "@/utils/hooks";
import { cn } from "@/utils/style";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionLeftAddon,
  AccordionPanel,
} from "@hippods/react-components-interactive";
import { Heading } from "@hippods/react-components-layout";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import IconButton from "./IconComponent";
type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { data: existingNestedCategories } = useNestedCategories();

  const isDarkMode = useRecoilValue(darkModeState);
  return (
    <div
      className={cn(
        "group absolute z-10 flex h-screen w-72 translate-x-0 flex-col gap-4 border-r bg-gray-100 p-3 text-base shadow-md duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className={cn("mt-2 flex h-72 flex-col gap-2 rounded-md")}>
        <div className="flex h-48 items-center justify-center">
          <div className="relative size-36 overflow-hidden rounded-lg bg-white">
            <Image
              src={"/profile.jpeg"}
              fill
              alt="profile"
              className="scale-100 object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center border-b pb-5">
          <div
            className={cn(
              "relative flex items-center gap-2 rounded-3xl",
              isDarkMode ? "shadow-custom-dark" : "shadow-custom",
            )}
          >
            <IconButton
              Icon={AiFillGithub}
              component={Link}
              href="https://github.com/jjou33"
              target="_blank"
            />
            <IconButton
              Icon={AiFillInstagram}
              component={Link}
              href="https://github.com/jjou33"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6 overflow-y-scroll rounded-md p-3">
        <div className="flex justify-start lg:hidden">
          <IconButton
            Icon={AiOutlineClose}
            onClick={close}
            className="size-5"
          />
        </div>

        <Accordion defaultActiveItems={["목록1"]} style={{ width: "100%" }}>
          {existingNestedCategories &&
            Object.entries(existingNestedCategories).map(
              ([category, subCategories]) => (
                <AccordionItem itemName={category} key={category}>
                  <AccordionButton>
                    <AccordionLeftAddon>
                      {IconSet[category].icon()}
                    </AccordionLeftAddon>
                    <Heading color="reverseGray" fontSize="lg" textScale={50}>
                      {category}
                    </Heading>
                  </AccordionButton>
                  <AccordionPanel>
                    <div className="flex flex-col gap-6">
                      {subCategories?.map((category) => (
                        <Link
                          href={`/categories/${category}`}
                          className="font-medium hover:underline"
                          key={category}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              ),
            )}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
