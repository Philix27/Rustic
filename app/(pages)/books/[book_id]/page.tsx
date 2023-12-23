import BookClient from "./client";

export default function BooksContentPage(props: {
  params: { book_id: string };
}) {
  return (
    <BookClient book_id={props.params.book_id} chapter_id={""} topic_id={""} />
  );
}
