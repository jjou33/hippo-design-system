import Footer from "@/components/Footer";
import RecoilProvider from "@/components/RecoilProvider";
import Sidebar from "@/components/Sidebar";
import { gmarketSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { cn } from "@/utils/style";
import "@hippods/react-components-interactive/style.css";
import "@hippods/react-components-layout/style.css";
import "@hippods/themes/themes.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  // const setDarkMode = useSetRecoilState(darkModeState);
  // useEffect(() => {
  //   const currentTheme = document.body.classList.contains("theme-dark");

  //   if (currentTheme) {
  //     setDarkMode(currentTheme);
  //   }
  // });
  return (
    <html lang="ko">
      <head />
      <body>
        {/* <Providers> */}
        <RecoilProvider>
          <div
            className={cn(
              "flex h-screen w-screen font-gmarket text-sm lg:text-base",
              inter.className,
              gmarketSans.variable,
            )}
          >
            <Sidebar />
            <div
              className={cn(
                "flex flex-1 flex-col transition-all duration-500 lg:ml-0",
                // isSidebarOpen ? "lg:ml-72" : "lg:ml-0", // Sidebar 상태에 따라 Main content 이동
              )}
            >
              <div className="flex flex-1 flex-col overflow-y-auto">
                <main className="relative flex-1">
                  {children}
                  {/* <Component
                  {...pageProps}
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                /> */}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </RecoilProvider>
        {/* </Providers> */}
      </body>
    </html>
  );
}
