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
    <div
      className="h-[40px] w-full flex items-center justify-between px-[30px]"
      style={{
        backgroundColor: AppStyles.colors.backgroundLight,
        color: AppStyles.colors.offWhite2,
      }}
    >
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
          className="ml-4 px-4 py-[0px] 
          rounded-md bg-yellow-600 
          hover:text-white  
          hover:bg-yellow-400 
          font-normal"
          style={{
            color: AppStyles.colors.backgroundDark,
          }}
        >
          <Text variant="B5" className="">
            Login
          </Text>
        </div>
      </div>
    </div>
  );
}

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
