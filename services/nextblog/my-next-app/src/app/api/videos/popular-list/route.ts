import {
  GetVideosPopularListRequestParams,
  GetVideosPopularListResponse,
} from "@/features/main/api/getVideosPopularList"
import { youtubeServerInstance } from "@/shared/api/youtube/server/instance"
import { NextRequest } from "next/server"
import { youtube_v3 } from "googleapis"
import { formatKoreanTextCompareDatesFromNow } from "@/shared/utils/format/date"
import { formatNumberToKoreanText } from "@/shared/utils/format/number"
// import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  try {
    const queryParams = parseQueryParams(request.nextUrl.searchParams)
    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...queryParams,
    })

    const mappedData = mapingResponse(data)

    return Response.json(mappedData)
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    })
  }
}

const parseQueryParams = (
  params: URLSearchParams,
): GetVideosPopularListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? "10"),
    pageToken: params.get("pageToken") ?? undefined,
  }
}

const mapingResponse = (
  data: youtube_v3.Schema$VideoListResponse,
): GetVideosPopularListResponse => {
  const lists =
    data?.items?.map(({ id, snippet, statistics }) => {
      const publishedAt = snippet?.publishedAt ?? ""
      const parsedViewCount = parseInt(statistics?.viewCount ?? "0")
      return {
        videoId: id ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.medium?.url ?? "",
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
        viewCount: parsedViewCount,
        viewCountDisplayText: formatNumberToKoreanText(parsedViewCount, true),
      }
    }) ?? []

  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  }
}