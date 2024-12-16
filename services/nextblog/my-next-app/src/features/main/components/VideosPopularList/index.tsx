"use client"

import { vars } from "@hippods/themes"

import { useGetVideosPopularList } from "@/features/main/hooks/useGetVideosPopularList"

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({})

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>{data.pages?.[0].lists?.[0].title}</p>
    </section>
  )
}
