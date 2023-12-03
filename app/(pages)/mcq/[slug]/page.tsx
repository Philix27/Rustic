"use client";
import { ClientOnly } from "@/comps/cleint";
import HomeView from "@/(pages)/home";

export default function Page({ params }: { params: { slug: string } }) {
  return <HomeView title={params.slug} />;
}
