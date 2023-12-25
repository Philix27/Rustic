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
    <Wrapper>
      <Menu onClick={() => setShowSheet(!showSheet)}>
        <AiOutlineMenu color={AppStyles.colors.offWhite2} fontSize={16} />
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
        <div className="button">
          <Text variant="B5" className="">
            Login
          </Text>
        </div>
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
  background-color: ${AppStyles.colors.backgroundLight};
  color: ${AppStyles.colors.offWhite2};

  .right_section {
    display: flex;
    align-items: center;

    .button {
      margin-left: 16px;
      border-radius: 4px;
      padding: 2.5px 16px;
      color: ${AppStyles.colors.backgroundDark};
      background-color: ${AppStyles.colors.primary};
      &:hover {
        color: white;
        background-color: ${AppStyles.colors.secondary};
        font-weight: 500;
      }
    }

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
