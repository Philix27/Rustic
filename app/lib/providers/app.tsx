import React from "react";
import ClerkAppProvider from "./clerk";
import { StylesProvider } from "./styles";
import { TrpcProvider } from "./trpc";

export function AppProviders(props: { children: React.ReactNode }) {
  return (
    <ClerkAppProvider>
      <TrpcProvider>
        <StylesProvider>{props.children}</StylesProvider>
      </TrpcProvider>
    </ClerkAppProvider>
  );
}
