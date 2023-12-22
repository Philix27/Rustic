import { AppStyles } from "@/lib";
import React, { ReactNode } from "react";
import styled from "styled-components";

export function AppButton(props: { children: ReactNode; onClick: () => void }) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}

const Button = styled.button`
  padding: 8px 20px;
  background-color: ${AppStyles.colors.backgroundLight};
  border: solid 1px ${AppStyles.colors.backgroundLight};
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: ${AppStyles.colors.backgroundDark};
    border: solid 1px ${AppStyles.colors.grey1};
  }
`;
