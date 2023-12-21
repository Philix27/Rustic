"use client";
import { AppStyles } from "@/lib";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Text } from "@/comps";
import NavLinksCard from "./navLinksCard";
import { AiOutlineMenu } from "react-icons/ai";

export function AppTopNavbar(props: { title: string; icons: JSX.Element[] }) {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <TopBar>
      <Menu onClick={() => setShowSheet(!showSheet)}>
        <AiOutlineMenu color={AppStyles.colors.offWhite2} fontSize={16} />
        {showSheet && <NavLinksCard />}
      </Menu>
      <div>
        <Text variant="B5">{props.title}</Text>
      </div>
      <div className="flex items-center">
        <IconsTray>
          {props.icons.map((v, i) => (
            <Fragment key={i}>{v}</Fragment>
          ))}
        </IconsTray>
        <div
          className="ml-4 px-4 py-[2px] 
          rounded-md bg-yellow-600 
          hover:text-white  
          hover:bg-yellow-400 
          font-medium"
          style={{
            // backgroundColor: AppStyles.colors.primary,
            color: AppStyles.colors.backgroundDark,
          }}
        >
          <Text variant="B5" className="">
            Login
          </Text>
        </div>
      </div>
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
  display: flex;
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
