import PostList from "@/components/PostList";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const generateStaticParams = async () => {
  const supabase = await createClient(cookies());

  const { data } = await supabase.from("Post").select("tags");
  const tags = Array.from(
    new Set(data?.flatMap((d: { tags: string }) => JSON.parse(d.tags))),
  );

  return tags.map((tag) => {
    tag;
  });
};

export default async function TagPosts({
  params,
}: {
  params: { tag: string };
}) {
  const supabase = await createClient(cookies());
  const tag = params.tag;

  const { data } = await supabase
    .from("Post")
    .select("*")
    .like("tags", `%${tag}%`);

  return (
    <PostList
      tag={tag}
      initialPosts={data?.map((post) => ({
        ...post,
        tags: JSON.parse(post.tags) as string[],
      }))}
    />
  );
}
