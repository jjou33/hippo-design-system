import "@/shared/styles"
import "@hippods/react-components-layout/style.css"
import "@hippods/react-components-interactive/style.css"
import "@hippods/themes/themes.css"
import { Metadata } from "next"
import { ThemeScript } from "@/shared/components/ThemeScript"

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
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  )
}
