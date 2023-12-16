"use client";
import { AppTopNavbar, AppWrapper, MarkdownStyledComp } from "@/comps";
import { Landing } from "../banner";
import { AppProjects, ICustomStyles } from "@/lib";
import { Fragment, useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import Sidebar from "./sidebar";

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
  const activeContent = AppProjects.filter(
    (v, index) => v.id === params.book_id
  )[0];
  return (
    <div style={s.container}>
      <AppTopNavbar
        title={activeContent.title}
        icons={[
          <MdViewSidebar onClick={() => setShowSidebar((prev) => !prev)} />,
        ]}
      />
      <div style={s.contentWrapper}>
        {showSidebar && <Sidebar />}

        <div style={s.innerContentWrapper}>
          <Landing
            title={activeContent.title}
            imgUrl={activeContent.cover_image}
            subtitle={activeContent.subtitle}
            opacity={1}
          />
          <div style={s.mdContentWrapper}>
            <div style={s.mdWrapper}>
              <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
