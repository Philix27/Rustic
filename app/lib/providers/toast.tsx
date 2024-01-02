"use client";
import { AppToaster } from "@/comps";
import React, { PropsWithChildren } from "react";

export function ToastProvider(props: PropsWithChildren) {
  return (
    <>
      <AppToaster />
      {props.children}
    </>
  );
}
