import "./lib/styles/index.css";
import type { Metadata } from "next";
import { AppProviders, store } from "@/lib";

export const metadata: Metadata = {
  title: "Rustic Guide",
  description: "Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const persistor = persistStore(store);
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
