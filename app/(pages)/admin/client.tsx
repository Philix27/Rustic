"use client";
import { AppTopNavbar, AppWrapper } from "@/comps";
import React from "react";

export default function AdminClient() {
  return (
    <div>
      <AppTopNavbar title={"Admin "} icons={[]} />
      <AppWrapper>
        <div>Admin Page</div>
      </AppWrapper>
    </div>
  );
}
