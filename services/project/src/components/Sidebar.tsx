import { useCategories } from "@/utils/hooks";
import { cn } from "@/utils/style";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import IconButton from "./IconComponent";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@hippods/react-components-interactive";
import { Heading, Text } from "@hippods/react-components-layout";
import { vars } from "@hippods/themes";

type SidebarProps = {
  close: () => void;
  isOpen: boolean;
};

const Sidebar: FC<SidebarProps> = ({ close, isOpen }) => {
  const { data: existingCategories } = useCategories();
  console.log("HELLO : ", { ...vars.colors.$scale.blackAlpha });
  return (
    <div
      className={cn(
        "absolute z-10 flex h-screen flex-col gap-4 border-r bg-white p-5 text-base",
        isOpen
          ? "translate-x-0 duration-500"
          : "-translate-x-full duration-500",
      )}
    >
      <div className="flex h-64 flex-col rounded-md border">
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

        <div className="flex h-full flex-1 flex-col items-center justify-center">
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
      <div className="flex flex-1 flex-col gap-6 overflow-y-scroll rounded-md border p-3">
        <div className="flex justify-start lg:hidden">
          <IconButton
            Icon={AiOutlineClose}
            onClick={close}
            className="size-5"
          />
        </div>
        {existingCategories?.map((category) => (
          <Link
            href={`/categories/${category}`}
            className="w-48 font-medium text-gray-600 hover:underline"
            key={category}
          >
            {category}
          </Link>
        ))}
        <Accordion defaultActiveItems={["목록1"]} style={{ width: "100%" }}>
          <AccordionItem itemName="목록1">
            <AccordionButton>
              <Heading color="gray" fontSize="sm">
                목록 1
              </Heading>
            </AccordionButton>
            <AccordionPanel>
              <Text color="gray" fontSize="md">
                내용입니다.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem itemName="목록2">
            <AccordionButton>
              <Heading color="gray" fontSize="lg">
                목록 2
              </Heading>
            </AccordionButton>
            <AccordionPanel>
              <Text color="gray" fontSize="md">
                내용입니다.
                <br />
                내용입니다.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
