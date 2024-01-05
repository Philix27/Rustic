import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "styled-components";

export default function ClerkAppProvider(props: { children: React.ReactNode }) {
  const style = useTheme()
  return (
    <ClerkProvider
      appearance={{
        layout: {
          showOptionalFields: false,
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          helpPageUrl: "/help",
          privacyPageUrl: "/privacy",
          termsPageUrl: "/terms",
        },
        variables: {
          colorPrimary: style.colors.primary,
          colorText: "white",
          colorTextSecondary: style.colors.offWhite2,
          colorTextOnPrimaryBackground: style.colors.offWhite2,
          colorBackground: style.colors.background,
          colorAlphaShade: "white",
        },
      }}
    >
      {props.children}
    </ClerkProvider>
  );
}
