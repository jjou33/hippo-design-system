import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { cn } from "@/utils/style";
import "@hippods/react-components-interactive/style.css";
import "@hippods/react-components-layout/style.css";
import "@hippods/themes/themes.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useState } from "react";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const setDarkMode = useSetRecoilState(darkModeState);
  // useEffect(() => {
  //   const currentTheme = document.body.classList.contains("theme-dark");

  //   if (currentTheme) {
  //     setDarkMode(currentTheme);
  //   }
  // });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div
          className={cn(
            "flex h-screen w-screen text-sm lg:text-base",
            inter.className,
          )}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            close={() => setIsSidebarOpen(false)}
          />
          <div
            className={cn(
              "flex flex-1 flex-col transition-all duration-500",
              isSidebarOpen ? "lg:ml-72" : "lg:ml-0", // Sidebar 상태에 따라 Main content 이동
            )}
          >
            <div className="flex flex-1 flex-col overflow-y-auto">
              <main className="relative flex-1">
                <Component
                  {...pageProps}
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
