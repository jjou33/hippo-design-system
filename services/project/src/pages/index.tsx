import { darkModeState } from "@/atoms/themeAtom";
import HeroSection from "@/components/HeroComponent";
import PostList from "@/components/PostList";
import { Post } from "@/types";
import { createClient } from "@/utils/supabase/server";

import { GetStaticProps } from "next";
import { useEffect } from "react";
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
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  useEffect(() => {
    const currentTheme = document.body.classList.contains("theme-dark");

    if (currentTheme) {
      setIsDarkMode(currentTheme);
    }
  }, [isDarkMode, setIsDarkMode]);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <PostList />;
    </div>
  );
}
