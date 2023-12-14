import { Tags } from "./tags";

interface T {
  question: string;
  answer: string;
  date_created?: string;
  date_updated?: string;
  tags: Tags[];
}

export const mcqData: T[] = [
  {
    question: "What is rust?",
    answer: "Some",
    tags: ["Async", "Variables"],
  },
  {
    question: "What is rust?",
    answer: "Some",
    tags: ["Async", "Variables"],
  },
  {
    question: "What is rust?",
    answer: "Some",
    tags: ["Async", "Variables"],
  },
  {
    question: "What is rust?",
    answer: "Some",
    tags: ["Async", "Variables"],
  },
];
