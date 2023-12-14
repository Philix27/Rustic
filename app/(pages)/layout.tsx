import "./lib/styles/index.scss";
import type { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}