import { NextRequest } from "next/server"

export const GET = async () => {
  const API_KEY = process.env.YOUTUBE_API_KEY

  const res = await fetch(
    `https://content-youtube.googleapis.com/youtube/v3/videos?regionCode=KR&chart=mostPopular&part=snippet&key=${API_KEY}`,
  )

  const data = await res.json()

  return Response.json({
    data,
  })
}

export const POST = async (request: NextRequest) => {
  const requestBody = await request.json()

  return Response.json({
    value: "pong",
    data: requestBody,
  })
}
