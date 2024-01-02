import React from "react";
import ClerkAppProvider from "./clerk";
import { StylesProvider } from "./styles";
import { TrpcProvider } from "./trpc";
import { ToastProvider } from "./toast";

export function AppProviders(props: { children: React.ReactNode }) {
  return (
    <ClerkAppProvider>
      <TrpcProvider>
        <StylesProvider>
          <ToastProvider>{props.children}</ToastProvider>
        </StylesProvider>
      </TrpcProvider>
    </ClerkAppProvider>
  );
}
