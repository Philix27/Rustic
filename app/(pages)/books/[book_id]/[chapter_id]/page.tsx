"use client";
import { AppTopNavbar } from "@/comps";
import { ICustomStyles } from "@/lib";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import Sidebar from "./sidebar";
import { trpc } from "@/_trpc";
import ActiveContent from "./activeContent";

const s: ICustomStyles = {
  container: {
    maxHeight: "100vh",
    minHeight: "calc(100vh - 40px)",
  },
  contentWrapper: { display: "flex", maxHeight: "100vh", overflowY: "auto" },
  innerContentWrapper: { width: "100%", maxHeight: "100vh", overflowY: "auto" },
  mdWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  mdContentWrapper: {
    width: "100%",
  },
};

export default function BooksContentPage({
  params,
}: {
  params: { book_id: string };
}) {
  const [showSidebar, setShowSidebar] = useState(true);

  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery({
    book_id: params.book_id,
  });

  const { isLoading: isBookLoading, data: book } =
    trpc.books.get_by_id.useQuery({
      book_id: params.book_id,
    });

  if (isLoading) return <div>Loading...</div>;
  if (isBookLoading) return <div>Loading...</div>;
  // if (!book.id) return <div>No books available</div>;

  return (
    <div style={s.container}>
      <AppTopNavbar
        title={book.title}
        icons={[
          <MdViewSidebar
            key={1}
            onClick={() => setShowSidebar((prev) => !prev)}
          />,
        ]}
      />
      <div style={s.contentWrapper}>
        {showSidebar && <Sidebar />}
        <ActiveContent
          isFirstPage={true}
          bannerTitle={book.title}
          subtitle={""}
          cover_image={book.img_url}
          content={book.desc}
        />
      </div>
    </div>
  );
}
