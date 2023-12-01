"use client";
import React, { ReactNode } from "react";
import { styled } from "styled-components";

type TVariants = "BarTitle" | "B1" | "B2" | "B3" | "B4" | "B5" | "B6";

export function Text(props: {
  variant: TVariants;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (props.variant) {
    case "BarTitle":
      return <BarTitle style={props.style}>{props.children}</BarTitle>;
    case "B1":
      return <B1 style={props.style}>{props.children}</B1>;
    case "B2":
      return <B2 style={props.style}>{props.children}</B2>;
    case "B3":
      return <B3 style={props.style}>{props.children}</B3>;
    case "B4":
      return <B4 style={props.style}>{props.children}</B4>;
    case "B5":
      return <B5 style={props.style}>{props.children}</B5>;
    case "B6":
      return <B6 style={props.style}>{props.children}</B6>;

    default:
      return <B3 style={props.style}>{props.children}</B3>;
  }
}

const BarTitle = styled.p`
  color: #eff1f6bf;
  font-size: 12px;
`;

const B1 = styled.p`
  color: #eff1f6bf;
  font-size: 20px;
`;
const B2 = styled.p`
  color: #eff1f6bf;
  font-size: 18px;
`;
const B3 = styled.p`
  color: #eff1f6bf;
  font-size: 16px;
`;
const B4 = styled.p`
  color: #eff1f6bf;
  font-size: 14px;
`;
const B5 = styled.p`
  color: #eff1f6bf;
  font-size: 12px;
`;
const B6 = styled.p`
  color: #eff1f6bf;
  font-size: 10px;
`;
