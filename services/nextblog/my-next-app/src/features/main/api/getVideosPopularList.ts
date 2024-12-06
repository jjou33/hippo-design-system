import { VideoThumbnail } from "@/shared/api/youtube/types/item"
import { ListPageApiInfo } from "@/shared/api/youtube/types/list"
import { youtube_v3 } from "googleapis"

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>

export type PopularListItem = {
  videoId: string
  title: string
  description: string
  channelId: string
  channelTitle: string
  thumbnail: VideoThumbnail
  publishedAt: string
  publishedAtDisplayText: string
  viewCount: number
  viewCountDisplayText: string
}

export type GetVideosPopularListResponse = {
  lists: PopularListItem[]
} & ListPageApiInfo
