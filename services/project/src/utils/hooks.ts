import { useQuery } from "@tanstack/react-query";
import { createClient } from "./supabase/client";

const supabase = createClient();

export const useNestedCategories = () =>
  useQuery({
    queryKey: ["nestedCateogories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Post")
        .select("category, subcategory");
      // const { data } = await supabase.from("Post").select("subcategory");

      if (error) {
        throw new Error(error.message);
      }

      // 데이터를 JSON 구조로 변환
      const groupedCategories = data.reduce(
        (acc: Record<string, string[]>, row) => {
          const { category, subcategory } = row;

          if (!acc[category]) {
            acc[category] = [];
          }

          if (subcategory && !acc[category].includes(subcategory)) {
            acc[category].push(subcategory);
          }

          return acc;
        },
        {},
      );

      return groupedCategories;
    },
  });

export const useCategories = () =>
  useQuery({
    queryKey: ["cateogories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Post").select("category");

      if (error) {
        throw new Error(error.message);
      }

      return Array.from(new Set(data?.map((d) => d.category)));
    },
  });

export const useSubCategories = () =>
  useQuery({
    queryKey: ["subCategories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Post").select("subcategory");

      if (error) {
        throw new Error(error.message);
      }

      return Array.from(new Set(data?.map((d) => d.subcategory)));
    },
  });

export const useTags = () =>
  useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await supabase.from("Post").select("tags");
      return Array.from(
        new Set(data?.flatMap((d: { tags: string }) => JSON.parse(d.tags))),
      );
    },
  });
