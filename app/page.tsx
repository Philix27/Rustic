"use client";
import { Metadata } from "next";
import ClientOnly from "./comps/CleintOnly";
import { MetaHeader } from "./comps/global/meta";
import { AppWrapper } from "./comps/wrapper/wrapper";
import HomeView from "./home/index";

export default function Home() {
  return (
    <ClientOnly>
      <HomeView />
    </ClientOnly>
  );
}
