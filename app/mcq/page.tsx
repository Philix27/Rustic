"use client";
import { ClientOnly } from "@/comps";
import HomeView from "@/home";
import { Metadata } from "next";

export default function McqPage() {
  return (
    <ClientOnly>
      <HomeView title={"Data Types"} />
    </ClientOnly>
  );
}
