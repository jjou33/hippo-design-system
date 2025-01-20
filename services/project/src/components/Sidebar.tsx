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
import IconButton from "./IconComponent";
type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { data: existingNestedCategories } = useNestedCategories();

  return (
    <div
      className={cn(
        "group absolute z-10 flex h-screen w-72 translate-x-0 flex-col gap-4 border-r bg-gray-100 p-3 text-base shadow-md duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className={cn("h-64 scale-95 flex-col rounded-md border p-4")}>
        <div className="flex h-52 items-center justify-center border-b">
          <div className="relative size-36 overflow-hidden rounded-full bg-white">
            <Image
              src={"/profile.jpeg"}
              fill
              alt="profile"
              className="scale-100 object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="relative flex items-center gap-2">
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
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fnext-hippo-dev.vercel.app&count_bg=%233D4AC8&title_bg=%23D8855E&icon=&icon_color=%23864D4D&title=VISITOR&edge_flat=false"
              alt="visitor"
              className="w-28"
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
