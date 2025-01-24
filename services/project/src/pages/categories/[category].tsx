import PostList from "@/components/PostList";
import { createClient } from "@/utils/supabase/server";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type CategoryPostsProps = {
  category: string;
};

const supabase = createClient({});
export const getStaticPaths = (async () => {
  const { data, error } = await (await supabase)
    .from("Post")
    .select("category");

  if (error) {
    throw new Error(error.message);
  }

  const categories = Array.from(new Set(data?.map((d) => d.category)));

  return {
    paths: categories.map((category) => ({ params: { category } })),
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const category = context.params?.category as string;
  const { data } = await (await supabase)
    .from("Post")
    .select("*")
    .eq("category", category);
  return {
    props: {
      category,
      posts:
        data?.map((post) => ({
          ...post,
          tags: JSON.parse(post.tags) as string[],
        })) ?? [],
    },
  };
}) satisfies GetStaticProps<CategoryPostsProps>;

export default function CategoryPosts({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostList category={category} />;
}
