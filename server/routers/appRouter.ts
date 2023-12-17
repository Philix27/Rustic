import { publicProcedure, router } from "../init";
import { blogRouter } from "./blogs";
import { booksRouter } from "./book";
import { bookChaptersRouter } from "./bookChapter";
import { quizRouter } from "./quiz";

export const appRouter = router({
  blog: blogRouter,
  books: booksRouter,
  bookChaptersRouter: bookChaptersRouter,
  quiz: quizRouter,
});

export type AppRouter = typeof appRouter;
