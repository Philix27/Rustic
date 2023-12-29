"use client";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

export function Client() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
