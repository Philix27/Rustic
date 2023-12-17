import { publicProcedure, router } from "@/server";

export const mcqRouter = router({
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
