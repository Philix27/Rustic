"use client";
import { ClientOnly } from "@/comps";
import BooksListView from "./client";


export default function BooksPage() {
  return (
    <ClientOnly>
      <BooksListView />
    </ClientOnly>
  );
}
