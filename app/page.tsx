"use client";
import { ClientOnly } from "@/comps";
import HomeView from "./home/index";

export default function Home() {
  return (
    <ClientOnly>
      <HomeView title={"Data Types"} />
    </ClientOnly>
  );
}
