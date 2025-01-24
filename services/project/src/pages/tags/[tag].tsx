import PostList from "@/components/PostList";
import { Post } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type TagPostsProps = {
  tag: string;
  posts: Post[];
};

const supabase = createClient({});

export const getStaticPaths = (async () => {
  const { data } = await (await supabase).from("Post").select("tags");
  const tags = Array.from(
    new Set(data?.flatMap((d: { tags: string }) => JSON.parse(d.tags))),
  );

  return {
    paths: tags.map((tag) => ({ params: { tag } })),
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const tag = context.params?.tag as string;
  const { data } = await (await supabase)
    .from("Post")
    .select("*")
    .like("tags", `%${tag}%`);

  return {
    props: {
      tag: context.params?.tag as string,
      posts:
        data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        })) ?? [],
    },
  };
}) satisfies GetStaticProps<TagPostsProps>;

export default function TagPosts({
  tag,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostList tag={tag} />;
}
