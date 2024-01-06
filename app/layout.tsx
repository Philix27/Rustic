import "./lib/styles/index.css";
import "@code-hike/mdx/dist/index.css";
import "@code-hike/mdx/styles";
import type { Metadata } from "next";
import { AppProviders } from "@/lib";

export const metadata: Metadata = {
  title: "Rusty Guide",
  description: "Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
