import { Metadata } from "next/types";
import { AboutUsClient } from "./client";

export const metadata: Metadata = {
  title: "About us",
  description: "Software Engineering",
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
