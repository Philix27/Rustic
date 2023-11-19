import "./lib/styles/index.scss";
import type { Metadata } from "next";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./lib/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
  title: "Eligbue Felix",
  description: "Eligbue Felix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const queryClient = new QueryClient();
  // const persistor = persistStore(store);
  return (
    <html lang="en">
      <body>
        {/* <ReduxProvider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
        {/* </ReduxProvider> */}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
