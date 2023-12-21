import { AppTopNavbar, AppModal } from "@/comps";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { AddBookModal, BookDisplay } from "./_comps";

export default function BooksListView() {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <>
      <AppTopNavbar
        title={"Books"}
        icons={[
          <MdAdd key={1} onClick={() => setShowSheet((prev) => !prev)} />,
        ]}
      />
      <AppModal isMounted={showSheet}>
        <AddBookModal onClose={() => setShowSheet(false)} />
      </AppModal>
      <BookDisplay />
    </>
  );
}
