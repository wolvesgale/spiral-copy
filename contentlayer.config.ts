import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const News = defineDocumentType(() => ({
  name: "News",
  filePathPattern: `news/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^news\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/news/${doc._raw.flattenedPath.replace(/^news\//, "")}`,
    },
  },
}));

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^articles\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/articles/${doc._raw.flattenedPath.replace(/^articles\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [News, Article],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
});
