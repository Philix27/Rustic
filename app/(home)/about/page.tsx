import { Metadata } from "next/types";
import AboutUsView from "./view";

export const metadata: Metadata = {
  title: "About us",
  description: "Software Engineering",
};

export default function AboutUsPage() {
  return <AboutUsView />;
}
