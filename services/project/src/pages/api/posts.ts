// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Post, PostRequest } from "@/types";
import { createClient } from "@/utils/supabase/server";

import formidable from "formidable";
import { readFileSync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>,
) {
  if (req.method !== "POST") return res.status(405).end();

  const form = formidable({ multiples: true });

  const [fields, files] = await form.parse(req);

  let preview_image_url: string | null = null;

  const supabase = await createClient(undefined, req.cookies);

  if (files.preview_image?.length === 1) {
    const file = files.preview_image[0];
    const fileContent = await readFileSync(file.filepath);
    const fileName = `${file.newFilename}_${file.originalFilename}`;
    const { data: uploadData } = await supabase.storage
      .from("blog-image")
      .upload(fileName, fileContent, {
        contentType: file?.mimetype ?? undefined,
      });

    // if (error) {
    //   res.status(403).json(error);
    // }
    if (uploadData?.path) {
      const { data } = await supabase.storage
        .from("blog-image")
        .getPublicUrl(uploadData.path);
      preview_image_url = data.publicUrl;
    }
  }

  const { title, category, tags, content, subcategory } = fields;
  const postRequest = {
    title: title?.[0],
    category: category?.[0],
    tags: tags?.[0],
    content: content?.[0],
    subcategory: subcategory?.[0],
    preview_image_url,
  } as PostRequest;

  const { data } = await supabase.from("Post").insert([postRequest]).select();

  if (data && data.length === 1) {
    const { tags, ...rest } = data[0];
    res.status(200).json({
      ...rest,
      tags: JSON.parse(tags) as string[],
    });
  } else {
    res.status(500).end();
  }
}
