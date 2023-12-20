"use client";
import { AppTopNavbar, AppWrapper } from "@/comps";
import { MdPublish, MdPreview } from "react-icons/md";
import React from "react";

export default function AdminClient() {
  return (
    <div>
      <AppTopNavbar
        title={"Admin "}
        icons={[<MdPublish key={1} />, <MdPreview key={2} />]}
      />
      <AppWrapper>
        <div>Admin Page</div>
      </AppWrapper>
    </div>
  );
}
