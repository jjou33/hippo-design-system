import * as s from "./style.css"
import { PopularListItem } from "@/features/main/api/getVideosPopularList"
import Link from "next/link"
import Image from "next/image"
type Props = {
  video: PopularListItem
}

export const VidieosPopularListItem = ({ video }: Props) => {
  const { title, thumbnail, videoId } = video

  return (
    <div className={s.wrapper}>
      <Link href="/" className={s.link}>
        <div className={s.thumbnailWrapper}>
          <Image
            className={s.image}
            width={thumbnail.width}
            height={thumbnail.height}
            src={thumbnail.url}
            alt={title}
          />
          <iframe
            className={s.video}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1`}
          />
        </div>
      </Link>
    </div>
  )
}
