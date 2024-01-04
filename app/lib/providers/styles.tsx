"use client";
import React from "react";
import { themeDark } from "@/lib";
import { ThemeProvider } from "styled-components";

export function StylesProvider(props: { children: React.ReactNode }) {
  return <ThemeProvider theme={themeDark}> {props.children}</ThemeProvider>;
}
