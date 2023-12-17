import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const booksRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.book.findMany();
  }),
  get_by_id: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.blog.findFirst({
        where: {
          id: input.book_id,
        },
      });
    }),
  create: publicProcedure
    .input(
      z.object({ title: z.string(), desc: z.string(), img_url: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.book.create({
        data: {
          title: input.title,
          desc: input.desc,
          img_url: input.img_url,
        },
        // input.title,
      });
    }),
  delete: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.book.delete({
        where: {
          id: input.book_id,
        },
      });
    }),
});
