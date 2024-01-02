import { AppStyles } from "@/lib";
import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

export function ModalContentWrapper(props: PropsWithChildren) {
  return <Wrapper>{props.children}</Wrapper>;
}
export const Wrapper = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 20px;
  width: 50%;
  height: fit-content;
  max-height: 100vh;
  border-radius: 5px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;
 

  @media ${AppStyles.breakpoints.sm} {
    width: 90%;
  }
`;
