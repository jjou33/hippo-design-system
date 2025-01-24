import { Post } from "@/types";
import { cn } from "@/utils/style";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PostCardProps = Omit<Post, "tags"> & {
  tags: string[];
  className?: string;
};
const PostCard: FC<PostCardProps> = ({
  id,
  content,
  preview_image_url,
  title,
  className,
}) => {
  return (
    <Link href={`/posts/${id}`} className={cn("", className)}>
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-md border border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105",
        )}
      >
        <div className="relative aspect-[1.8/1] w-full">
          <Image
            src={preview_image_url ?? "/thumbnail.svg"}
            fill
            sizes="360px"
            alt={title}
            className="border-b border-gray-300 object-cover"
            priority
          />
        </div>
        <div className="flex h-full flex-col p-2">
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="line-clamp-3 h-14 text-sm text-gray-500 lg:h-14">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
