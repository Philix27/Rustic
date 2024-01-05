"use client";

import React, { Fragment, Suspense, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "@/comps";
import NavLinksCard from "./navLinksCard";
import { AiOutlineMenu } from "react-icons/ai";
import { SignInButton, SignOutButton, UserButton, auth } from "@clerk/nextjs";
import { AuthButtons } from "./authButtons";

export function AppTopNavbar(props: { title: string; icons: JSX.Element[] }) {
  const [showSheet, setShowSheet] = useState(false);
  const style = useTheme();
  return (
    <Wrapper>
      <Menu onClick={() => setShowSheet(!showSheet)}>
        <AiOutlineMenu color={style.colors.offWhite2} fontSize={14} />
        {showSheet && <NavLinksCard />}
      </Menu>
      <div>
        <Text variant="B4">{props.title}</Text>
      </div>
      <div className="right_section">
        <div className="icons_tray">
          {props.icons.map((v, i) => (
            <Fragment key={i}>{v}</Fragment>
          ))}
        </div>
        <AuthButtons />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props) => props.theme.colors.offWhite2};

  .right_section {
    display: flex;
    align-items: center;

    .icons_tray {
      display: flex;
      svg {
        margin: 0 10px;
        font-size: 16px;
        color: #8a8a8a;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const Menu = styled.div`
  position: relative;
  cursor: pointer;
`;
