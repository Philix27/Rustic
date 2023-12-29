import "./lib/styles/index.css";
// import type { Metadata } from "next";
import { store } from "./lib/redux/store";
import { TrpcProvider } from "./_trpc";
import { AppStyles, AppProviders } from "@/lib";

export const metadata = {
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
        <AppProviders>
          <TrpcProvider>{children}</TrpcProvider>
        </AppProviders>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
