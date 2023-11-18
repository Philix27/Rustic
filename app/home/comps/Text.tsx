import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface T {
  variants: "BarTitle";
  children: ReactNode;
}
export default function Text(props: T) {
  return <P>{props.children}</P>;
}

const P = styled.p`
  color: #eff1f6bf;
  font-size: 12px;
`;
