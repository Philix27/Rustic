"use client";
import { ClientOnly } from "@/comps/cleint";
import HomeView from "@/(home)/welcome";

export default function Page({ params }: { params: { slug: string } }) {
  return <HomeView title={params.slug} />;
}
