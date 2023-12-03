"use client";
import sanityConfig from "@/sanity/sanity.config";
import React from "react";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={sanityConfig} />;
}
