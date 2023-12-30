import React from "react";
import { Client } from "./client";
import { ClientOnly } from "@/comps";

export default function ProfilePage() {
  return (
    <ClientOnly>
      <Client />
    </ClientOnly>
  );
}
