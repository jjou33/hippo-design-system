"use client";

import { IconSet } from "@/constant/iconSet";
import { useNestedCategoriesSample } from "@/utils/hooks";
import { cn } from "@/utils/style";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionLeftAddon,
  AccordionPanel,
} from "@hippods/react-components-interactive";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
// import { useRecoilValue } from "recoil";
import IconButton from "./IconComponent";
import { useSidebar } from "./Providers";

const Sidebar: FC = () => {
  // const { data: existingNestedCategories } = useNestedCategories();
  const { isOpen, setIsOpen } = useSidebar();
  const [activePanel, setActivePanel] = useState<string[]>([]);
  const { data: existingNestedCategories } = useNestedCategoriesSample();

  useEffect(() => {}, [activePanel]);

  // const isDarkMode = useRecoilValue(darkModeState);

  const isActive = (category: string) => {
    if (activePanel.includes(category)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={cn(
        "group absolute z-10 flex h-screen w-72 translate-x-0 flex-col gap-4 border-r text-base shadow-md duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className={cn("flex h-72 flex-col gap-2 rounded-md")}>
        <div className="relative flex h-4/5">
          <div className="absolute left-0 top-0 h-1/2 w-full bg-[url('/profileBack.png')] bg-cover bg-center" />

          <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg">
            <div className="flex flex-col">
              <Image
                src={"/profile.jpeg"}
                fill
                alt="profile"
                className="scale-100 object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center border-b pb-5">
          <div
            className={cn(
              "relative flex items-center gap-2 rounded-3xl shadow-custom",
              // isDarkMode ? "shadow-custom-dark" : "shadow-custom",
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
      <div className="flex flex-1 flex-col gap-6 overflow-y-scroll rounded-md p-5">
        <div className="flex justify-start lg:hidden">
          <IconButton
            Icon={AiOutlineClose}
            onClick={() => setIsOpen(false)}
            className="size-5"
          />
        </div>

        <Accordion defaultActiveItems={["목록1"]} style={{ width: "100%" }}>
          {existingNestedCategories &&
            Object.entries(existingNestedCategories).map(
              ([maincategory, headercategory]) => (
                <>
                  <div className="text-md flex items-center gap-2 py-3 font-light text-gray-700">
                    {IconSet["root"].icon()}
                    <span>{maincategory}</span>
                  </div>
                  {Object.entries(headercategory).map(
                    ([category, subCategories]) => (
                      <AccordionItem itemName={category} key={category}>
                        <AccordionButton>
                          <AccordionLeftAddon>
                            <div className="flex rounded-full bg-gray-200 p-2">
                              {IconSet[category].icon()}
                            </div>
                          </AccordionLeftAddon>

                          <div className="flex w-full items-center justify-between">
                            <span className="text-md py-2 font-normal">
                              {category}
                            </span>
                            <span
                              className={cn(
                                "transition-transform duration-300 ease-in-out",
                                isActive(category) ? "rotate-90" : "",
                              )}
                            >
                              {IconSet["arrow"].icon()}
                            </span>
                          </div>
                        </AccordionButton>
                        <AccordionPanel setActivePanel={setActivePanel}>
                          <div className="flex flex-col gap-2">
                            {subCategories?.map((category) => (
                              <div
                                className="flex w-full items-center gap-2 px-2 text-coolGray-500"
                                key={category}
                              >
                                {IconSet["arrow"].icon()}
                                <div className="flex w-full items-center gap-2 hover:text-red-400">
                                  {IconSet[category]?.icon()}
                                  <Link
                                    href={`/categories/${category}`}
                                    className="w-full p-1 font-medium"
                                  >
                                    {category}
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionPanel>
                      </AccordionItem>
                    ),
                  )}
                </>
              ),
            )}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
