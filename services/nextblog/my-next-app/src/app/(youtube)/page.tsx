import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"

import { Suspense } from "react"
import { VideosPopularList } from "@/features/main/components/VideosPopularList"

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>😆😆</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  )
}
