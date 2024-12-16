import "@/shared/styles"
import "@hippods/react-components-layout/style.css"
import "@hippods/react-components-interactive/style.css"
import "@hippods/themes/themes.css"
import { Metadata } from "next"
import { ThemeScript } from "@/shared/components/ThemeScript"
import { QueryProvider } from "@/shared/components/QueryProvider"

export const metadata: Metadata = {
  title: "HIPPO-DEV",
  description: "Cool & Enjoy Coding With FRONT",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <ThemeScript />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
