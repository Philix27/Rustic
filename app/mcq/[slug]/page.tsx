"use client";
import ClientOnly from "@/comps/CleintOnly";
import HomeView from "@/home";
import { AllMcq } from "@/lib/docs/mcq";
import { Metadata } from "next";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <ClientOnly>
      <HomeView title={params.slug} />
    </ClientOnly>
  );
}
