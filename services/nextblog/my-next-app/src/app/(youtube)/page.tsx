import { VideosPopularList } from "@/features/main/components/VideosPopularList"
import * as s from "./page.css"
import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"
import { Suspense } from "react"

export default async function Home() {
  return (
    <main className={s.main}>
      <h1 style={{ padding: "12px" }}>타이틀</h1>
      <Suspense fallback={<div>😆😆</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  )
}
