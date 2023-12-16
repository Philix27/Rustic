"use client";
import { AppLinks, AppStyles } from "@/lib";
import React, { Fragment, useState } from "react";
import { FaCloudflare } from "react-icons/fa";
import styled from "styled-components";
import { Text } from "@/comps";
import NavLinksCard from "./navLinksCard";

export function AppTopNavbar(props: { title: string; icons: JSX.Element[] }) {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <TopBar>
      <Menu onClick={() => setShowSheet(!showSheet)}>
        <FaCloudflare color={AppStyles.colors.offWhite2} fontSize={16} />
        {showSheet && <NavLinksCard />}
      </Menu>
      <div>
        <Text variant="BarTitle">{props.title}</Text>
      </div>
      <IconsTray>
        {props.icons.map((v, i) => (
          <Fragment key={i}>{v}</Fragment>
        ))}
      </IconsTray>
    </TopBar>
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

const Menu = styled.div`
  position: relative;
  cursor: pointer;
`;
