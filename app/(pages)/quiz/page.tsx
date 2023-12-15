"use client";
import { ClientOnly } from "@/comps";
import HomeView from "@/(home)/welcome";

export default function McqPage() {
  return (
    <ClientOnly>
      <HomeView title={"Data Types"} />
    </ClientOnly>
  );
}
