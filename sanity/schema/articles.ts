import { defineField, defineType, defineArrayMember } from "sanity";

export const article = {
  name: "article",
  title: "articles",
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
      type: "text",
      rows: 4,
    }),
  ],
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
    }),
    {
      title: "Another block",
      type: "block",
    },
    {
      title: "img",
      type: "image",
    },
    {
      title: "Code block",
      type: "code",
    },
  ],
};
