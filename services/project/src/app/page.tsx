import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

// type HomeProps = {
//   isSidebarOpen: boolean;
//   setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
// };
// export default function Home({ isSidebarOpen, setIsSidebarOpen }: HomeProps) {
//   const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
//   const [isEndHeroSection, setIsHeroSection] = useState(false);
//   useEffect(() => {
//     const currentTheme = document.body.classList.contains("theme-dark");

//     if (currentTheme) {
//       setIsDarkMode(currentTheme);
//     }
//   }, [isDarkMode, setIsDarkMode]);

//   return (
//     <div className="flex flex-col">
//       <Header
//         isEndHeroSection={isEndHeroSection}
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />
//       <HeroSection setIsHeroSection={setIsHeroSection} />
//       <PostList />;
//     </div>
//   );
// }

export default async function Home() {
  const supabase = await createClient(cookies());
  const { data } = await supabase.from("Post").select("*");

  return (
    <div className="flex flex-col">
      <Header />
      <PostList
        initialPosts={data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        }))}
      />
    </div>
  );
}
