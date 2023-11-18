import { Tags } from "./tags";

interface T {
  title: string;
  content: string;
  date_created?: string;
  date_updated?: string;
  tags: Tags[];
}

export const articlesData: T[] = [];
