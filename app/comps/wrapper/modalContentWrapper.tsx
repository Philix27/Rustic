import { AppStyles } from "@/lib";
import React from "react";
import { styled } from "styled-components";

export const ModalContentWrapper = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 20px;
  width: 50%;
  max-height: fit-content;
  /* max-height: 75%; */
  border-radius: 5px;

  @media ${AppStyles.breakpoints.sm} {
    width: 90%;
  }
`;
