"use client";
import React from "react";
import ClerkAppProvider from "./clerk";
import { StylesProvider } from "./styles";
import { TrpcProvider } from "./trpc";
import { ToastProvider } from "./toast";


export function AppProviders(props: { children: React.ReactNode }) {
  return (
    <StylesProvider>
      <ClerkAppProvider>
        <TrpcProvider>
          <ToastProvider>{props.children}</ToastProvider>
        </TrpcProvider>
      </ClerkAppProvider>
    </StylesProvider>
  );
}
