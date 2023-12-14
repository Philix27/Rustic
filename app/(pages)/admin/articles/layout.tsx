"use client";
import { AppStyles } from "@/lib/utils";
import React from "react";
import {
  AiOutlineAlert,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaCloudflare } from "react-icons/fa";
import styled from "styled-components";
import { Text } from "@/comps";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBar>
        <div>
          <FaCloudflare color="#8a8a8a" fontSize={16} />
        </div>
        <div>
          <Text variant="BarTitle">Title</Text>
        </div>
        <IconsTray>
          <AiOutlineHome />
          <AiOutlineAlert />
          <AiOutlineSetting />
        </IconsTray>
      </TopBar>
      {children}
    </div>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${AppStyles.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eff1f6bf;
  padding: 0 20px;
`;

const IconsTray = styled.div`
  svg {
    margin: 0 10px;
    font-size: 16px;
    color: #8a8a8a;
    &:hover {
      color: white;
    }
  }
`;
