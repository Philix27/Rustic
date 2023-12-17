import { publicProcedure, router } from "../init";
import { blogRouter } from "./blogs";
import { booksRouter } from "./book";
import { quizRouter } from "./quiz";

export const appRouter = router({
  blog: blogRouter,
  books: booksRouter,
  mcqs: quizRouter,
});

export type AppRouter = typeof appRouter;
