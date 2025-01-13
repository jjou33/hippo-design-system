import { API_BASE_URL } from "@/shared/api/constants"
import { VideoThumbnail } from "@/shared/api/youtube/types/item"
import { ListPageApiInfo } from "@/shared/api/youtube/types/list"
import { youtube_v3 } from "googleapis"
import queryString from "query-string"

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

export const getVideosPopularListPath = "api/videos/popular-list"

export const getVideosPopularListUrl = `${API_BASE_URL}/${getVideosPopularListPath}`

export const getVideosPopularList = async (
  params: GetVideosPopularListRequestParams,
): Promise<GetVideosPopularListResponse> => {
  const queryParams = queryString.stringify(params)

  const url = `${getVideosPopularListUrl}?${queryParams}`

  const response = await fetch(url)

  return await response.json()
}
