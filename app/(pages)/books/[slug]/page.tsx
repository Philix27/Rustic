"use client";
import { AppTopNavbar, AppWrapper, MarkdownStyledComp } from "@/comps";
import { Landing } from "../banner";
import { AppProjects } from "@/lib";
import { Fragment, useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import Sidebar from "./sidebar";

export default function ProjectsContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const activeContent = AppProjects.filter(
    (v, index) => v.id === params.slug
  )[0];
  return (
    <Fragment>
      <AppTopNavbar
        title={activeContent.title}
        icons={[
          <MdViewSidebar onClick={() => setShowSidebar((prev) => !prev)} />,
        ]}
      />
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {showSidebar && <Sidebar />}

        <div>
          <Landing
            title={activeContent.title}
            imgUrl={activeContent.cover_image}
            subtitle={activeContent.subtitle}
            opacity={1}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
              }}
            >
              <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
