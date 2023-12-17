import { publicProcedure, router } from "../init";
import { blogRouter } from "./blogs";
import { booksRouter } from "./book";
import { mcqRouter } from "./mcqs";

export const appRouter = router({
  blog: blogRouter,
  books: booksRouter,
  mcqs: mcqRouter,
  get_todo: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
  get_books: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
  get_blogs: publicProcedure.query(({ ctx }) => {
    ctx;
    return [10, 20, 30];
  }),
});

export type AppRouter = typeof appRouter;
