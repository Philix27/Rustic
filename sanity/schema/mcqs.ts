import { defineField, defineType, defineArrayMember } from "sanity";

export const mcqSchema = {
  title: "Mcqs",
  name: "mcqs",
  type: "document",
  fields: [
    defineField({
      name: "question", // field name is required and must be unique
      type: "string", // field type is required
    }),
    defineField({
      name: "option1",
      type: "string",
    }),
    defineField({
      name: "option2",
      type: "string",
    }),
    defineField({
      name: "option3",
      type: "string",
    }),
    defineField({
      name: "option4",
      type: "string",
    }),
    defineField({
      name: "option5",
      type: "string",
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 4,
    }),
  ],
};
