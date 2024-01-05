"use client";

import React, { ReactNode } from "react";
import { useTheme } from "styled-components";

type TVariants = "B1" | "B2" | "B3" | "B4" | "B5" | "B6";

export function Text(props: {
  variant: TVariants;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const style = useTheme();
  switch (props.variant) {
    case "B1":
      return (
        <p
          className={props.className}
          style={{
            fontSize: "2rem",
            color: style.colors.offWhite2,
            ...props.style,
          }}
        >
          {props.children}
        </p>
      );
    case "B2":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1.5rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B3":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B4":
      return (
        <p
          className={props.className}
          style={{ fontSize: "0.9rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B5":
      return (
        <p
          className={props.className}
          style={{ fontSize: "0.8rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B6":
      return (
        <p
          className={props.className}
          style={{ fontSize: "0.7rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );

    default:
      return (
        <p
          className={`text-sm ${props.className}`}
          style={{ fontSize: "1rem", color: style.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
  }
}
