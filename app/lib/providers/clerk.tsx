import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { AppStyles } from "@/lib";

export default function ClerkAppProvider(props: { children: React.ReactNode }) {
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
          colorPrimary: AppStyles.colors.primary,
          colorText: "white",
          colorTextSecondary: AppStyles.colors.offWhite2,
          colorTextOnPrimaryBackground: AppStyles.colors.offWhite2,
          colorBackground: AppStyles.colors.background,
        },
      }}
    >
      {props.children}
    </ClerkProvider>
  );
}
