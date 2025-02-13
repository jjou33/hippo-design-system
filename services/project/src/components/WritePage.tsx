"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { MarkdownEditor } from "@/components/Markdown";
import { useCategories, useSubCategories, useTags } from "@/utils/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";

// type WriteProps = {
//   existingTags: string[];
//   existingCategories: string[];
// };

type SelectOptionType = {
  label: string;
  value: string;
};
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
});

export default function WritePage() {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { data: existingCategories } = useCategories();
  const { data: existingSubCategories } = useSubCategories();
  const { data: existingTags } = useTags();

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tags, setTags] = useState("[]");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleRef.current?.value || titleRef.current?.value.length === 0)
      return alert("제목을 입력해주세요");
    if (category.length === 0) return alert("카테고리를 입력해 주세요");
    if (subCategory.length === 0) return alert("서브 카테고리를 입력해 주세요");
    if (tags.length === 0) return alert("태그를 입력해 주세요");
    if (content.length === 0) return alert("글 내용을 입력해 주세요");

    const formData = new FormData();

    formData.append("title", titleRef.current?.value ?? "");
    formData.append("category", category);
    formData.append("subcategory", subCategory);
    formData.append("tags", tags);
    formData.append("content", content);

    if (fileRef.current?.files?.[0]) {
      formData.append("preview_image", fileRef.current.files[0]);
    }
    console.log("SUB CATEGORY : ", subCategory);
    const response = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.id) router.push(`/posts/${data.id}`);
  };
  return (
    <div className="container flex flex-col pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="제목" ref={titleRef} />
          <Input type="file" accept="image/*" ref={fileRef} />

          <CreatableSelect
            options={(existingCategories ?? []).map((category) => ({
              label: category,
              value: category,
            }))}
            placeholder="메인 카테고리"
            onChange={(e) => {
              const selectedOption = e as SelectOptionType;
              return selectedOption && setCategory(selectedOption.value);
            }}
            isMulti={false}
          />
          <CreatableSelect
            options={(existingSubCategories ?? []).map((category) => ({
              label: category,
              value: category,
            }))}
            placeholder="서브 카테고리"
            onChange={(e) => {
              const selectedOption = e as SelectOptionType;
              return selectedOption && setSubCategory(selectedOption.value);
            }}
            isMulti={false}
          />
          <CreatableSelect
            options={(existingTags ?? []).map((tag) => ({
              label: tag,
              value: tag,
            }))}
            placeholder="태그"
            onChange={(e) => {
              const selectedOption = e as SelectOptionType[];
              return (
                selectedOption &&
                setTags(JSON.stringify(selectedOption.map((e) => e.value)))
              );
            }}
            isMulti
          />
          <MarkdownEditor
            height={500}
            value={content}
            onChange={(s) => setContent(s ?? "")}
          />
        </div>
        <Button type="submit" className="mt-4">
          작성하기
        </Button>
      </form>
    </div>
  );
}
