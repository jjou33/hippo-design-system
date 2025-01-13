"use client"

import { useGetVideosPopularList } from "@/features/main/hooks/useGetVideosPopularList"
import { VidieosPopularListItem } from "./Listitem"

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({ maxResults: 5 })

  const flatData = data.pages.map((page) => page?.lists ?? []).flat()

  return (
    <section>
      {flatData.map((item) => (
        <VidieosPopularListItem key={item.videoId} video={item} />
      ))}
    </section>
  )
}
