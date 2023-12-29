import React from "react";
import { Client } from "./client";
import { ClientOnly } from "@/comps";

export default function Page() {
  return (
    <ClientOnly>
      <Client />
    </ClientOnly>
  );
}
