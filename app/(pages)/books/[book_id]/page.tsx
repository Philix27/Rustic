import BookClient from "./client";

export default function BooksContentPage({
  params,
}: {
  params: { book_id: string };
}) {
  return <BookClient book_id={params.book_id} />;
}
