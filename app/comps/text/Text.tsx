"use client";
import React, { ReactNode } from "react";

type TVariants = "B1" | "B2" | "B3" | "B4" | "B5" | "B6";

export function Text(props: {
  variant: TVariants;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (props.variant) {
    case "B1":
      return (
        <p className={`text-3xl ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
    case "B2":
      return (
        <p className={`text-2xl ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
    case "B3":
      return (
        <p className={`text-xl ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
    case "B4":
      return (
        <p className={`text-lg ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
    case "B5":
      return (
        <p className={`text-[12px] ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
    case "B6":
      return (
        <p className={`text-sm ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );

    default:
      return (
        <p className={`text-sm ${props.className}`} style={props.style}>
          {props.children}
        </p>
      );
  }
}
