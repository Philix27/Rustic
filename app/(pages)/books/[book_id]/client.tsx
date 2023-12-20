"use client";
import { AppTopNavbar } from "@/comps";
import { ICustomStyles } from "@/lib";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import { Sidebar, ActiveContent } from "./_comps";
import { trpc } from "@/_trpc";

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
export default function BookClient(props: { book_id: string }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const { isLoading, data: book } = trpc.books.get_by_id.useQuery({
    book_id: props.book_id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!book.id) return <div>No books available</div>;
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
        {showSidebar && <Sidebar book_id={book.id} />}
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
