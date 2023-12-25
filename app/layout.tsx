import "./lib/styles/index.css";
// import type { Metadata } from "next";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import { Provider as ReduxProvider } from "react-redux";
import { store } from "./lib/redux/store";
import { TrpcProvider } from "./_trpc";
import { StylesProvider } from "./lib";

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
        {/* <ReduxProvider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <TrpcProvider>
          <StylesProvider>{children}</StylesProvider>
        </TrpcProvider>
        {/* </PersistGate> */}
        {/* </ReduxProvider> */}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
