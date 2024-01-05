"use client";
import { ClientOnly } from "@/comps";
import BlogComp from "./client";

export default function BlogsPage() {
  return (
    <ClientOnly>
      <BlogComp />
    </ClientOnly>
  );
}
