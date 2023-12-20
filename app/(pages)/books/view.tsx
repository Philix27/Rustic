import { TextBody, AppTopNavbar, AppModal } from "@/comps";
import { MdAdd, MdMoreHoriz } from "react-icons/md";
import { useState } from "react";
import { AddBookModal } from "./addBookModal";
import BookDisplay from "./bookDisplay";

export default function BooksListView() {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <>
      <AppTopNavbar
        title={"Books"}
        icons={[
          <MdAdd key={1} onClick={() => setShowSheet((prev) => !prev)} />,
          <MdMoreHoriz key={2} onClick={() => setShowSheet((prev) => !prev)} />,
          <MdMoreHoriz key={3} onClick={() => setShowSheet((prev) => !prev)} />,
          <MdMoreHoriz key={4}  onClick={() => setShowSheet((prev) => !prev)} />,
        ]}
      />
      <AppModal isMounted={showSheet}>
        <AddBookModal onClose={() => setShowSheet(false)} />
      </AppModal>
      <BookDisplay />
    </>
  );
}
