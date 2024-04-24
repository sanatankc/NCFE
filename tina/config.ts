import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "1b6ec89e-7e22-47c3-8d80-9cc5876c7746", // Get this from tina.io
  token: "b02265af79337f77c4992a9aa2bb42c7b1e0248b", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: "string", name: "title", label: "Title" },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: "rich-text", name: "caption", label: "Caption" },
          { type: "rich-text", name: "blog", label: "Blog" },
        ]
      },
    ],
  },
});
