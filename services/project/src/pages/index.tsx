import { darkModeState } from "@/atoms/themeAtom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroComponent";
import PostList from "@/components/PostList";
import { Post } from "@/types";
import { createClient } from "@/utils/supabase/server";

import { GetStaticProps } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const getStaticProps = (async () => {
  const supabase = await createClient({});
  const { data } = await supabase.from("Post").select("*");

  return {
    props: {
      posts:
        data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        })) ?? [],
    },
  };
}) satisfies GetStaticProps<{
  posts: Post[];
}>;

type HomeProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
export default function Home({ isSidebarOpen, setIsSidebarOpen }: HomeProps) {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [isEndHeroSection, setIsHeroSection] = useState(false);
  useEffect(() => {
    const currentTheme = document.body.classList.contains("theme-dark");

    if (currentTheme) {
      setIsDarkMode(currentTheme);
    }
  }, [isDarkMode, setIsDarkMode]);

  return (
    <div className="flex flex-col">
      <Header
        isEndHeroSection={isEndHeroSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <HeroSection setIsHeroSection={setIsHeroSection} />
      <PostList />;
    </div>
  );
}
