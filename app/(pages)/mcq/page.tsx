"use client";
import { ClientOnly } from "@/comps";
import HomeView from "@/(pages)/home";


export default function McqPage() {
  return (
    <ClientOnly>
      <HomeView title={"Data Types"} />
    </ClientOnly>
  );
}
