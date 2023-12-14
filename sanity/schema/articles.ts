import { defineField, defineType, defineArrayMember } from "sanity";

export const article = {
  title: "Articles",
  name: "article",
  type: "document",
  fields: [
    defineField({
      name: "title", // field name is required and must be unique
      type: "string", // field type is required
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "blockContent",
    }),
  ],
};
