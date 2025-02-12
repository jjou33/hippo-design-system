import { useQuery } from "@tanstack/react-query";
import { createClient } from "./supabase/client";

const supabase = createClient();

export const useNestedCategories = () =>
  useQuery({
    queryKey: ["nestedCateogories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Post")
        .select("maincategory, category, subcategory");
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

export const useNestedCategoriesSample = () =>
  useQuery({
    queryKey: ["nestedCateogories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Post")
        .select("maincategory, category, subcategory");
      // const { data } = await supabase.from("Post").select("subcategory");

      if (error) {
        throw new Error(error.message);
      }

      const groupedCategoriesSample = data.reduce(
        (acc: Record<string, Record<string, string[]>>, row) => {
          if (!row.maincategory || !row.category || !row.subcategory) {
            return acc; // ✅ null 값이 하나라도 있으면 무시
          }
          const { maincategory, category, subcategory } = row;

          if (!acc[maincategory]) {
            acc[maincategory] = {}; // ✅ category를 담을 객체
          }
          if (!acc[maincategory][category]) {
            acc[maincategory][category] = []; // ✅ subcategory 배열
          }
          if (!acc[maincategory][category].includes(subcategory)) {
            acc[maincategory][category].push(subcategory);
          }

          return acc;
        },
        {} as Record<string, Record<string, string[]>>, // 초기 타입 지정
      );

      console.log("SAMPLE : ", groupedCategoriesSample);
      return groupedCategoriesSample;
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
