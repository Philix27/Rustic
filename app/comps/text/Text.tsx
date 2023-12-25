"use client";
import { AppStyles } from "@/lib";
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
        <p
          className={props.className}
          style={{
            fontSize: "2.4rem",
            color: AppStyles.colors.offWhite2,
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
          style={{ fontSize: "2rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B3":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1.75rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B4":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1.5rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B5":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1.3rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
    case "B6":
      return (
        <p
          className={props.className}
          style={{ fontSize: "1rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );

    default:
      return (
        <p
          className={`text-sm ${props.className}`}
          style={{ fontSize: "1.2rem", color: AppStyles.colors.offWhite2 }}
        >
          {props.children}
        </p>
      );
  }
}
