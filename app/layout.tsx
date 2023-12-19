import "./lib/styles/index.scss";
import type { Metadata } from "next";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./lib/redux/store";
import TrpcProvider from "./_trpc/provider";

export const metadata: Metadata = {
  title: "Rustic Guide",
  description: "Software Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const persistor = persistStore(store);
  return (
    <html lang="en">
      <body>
        {/* <ReduxProvider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <TrpcProvider>{children}</TrpcProvider>
        {/* {children} */}
        {/* </PersistGate> */}
        {/* </ReduxProvider> */}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
