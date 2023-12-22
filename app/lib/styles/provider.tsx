"use client";
import React from "react";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

export function StylesProvider(props: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}> {props.children}</ThemeProvider>;
  //   return <> {props.children}</>;
}
