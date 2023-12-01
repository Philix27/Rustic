"use client";
import { ClientOnly } from "@/comps/CleintOnly";
import HomeView from "@/home";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <ClientOnly>
      <HomeView title={params.slug} />
    </ClientOnly>
  );
}
