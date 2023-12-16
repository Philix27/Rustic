import { publicProcedure, router } from "./init";

export const appRouter = router({
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
