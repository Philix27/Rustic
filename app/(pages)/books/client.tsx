import { AppTopNavbar, AppModal } from "@/comps";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { AddBookModal, BookDisplay } from "./_comps";
import { useSession } from "@clerk/nextjs";
import { AppClerk } from "@/lib";

export default function BooksListView() {
  const [showSheet, setShowSheet] = useState(false);
  const { session } = useSession();
  const userRole = AppClerk.checkUserRole(session);
  console.log("Session", session);
  // console.log("Session org mem", session.user.organizationMemberships)
  console.log("UserRole", userRole);
  return (
    <>
      <AppTopNavbar
        title={"Books"}
        icons={[
          userRole === "org:admin" && (
            <MdAdd key={1} onClick={() => setShowSheet((prev) => !prev)} />
          ),
        ]}
      />
      <AppModal isMounted={showSheet}>
        <AddBookModal onClose={() => setShowSheet(false)} />
      </AppModal>
      <BookDisplay />
    </>
  );
}
