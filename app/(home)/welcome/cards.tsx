"use client";
import React from "react";
import { styled } from "styled-components";
import { AppStyles } from "@/lib";
import { Text, navLinkList } from "@/comps";
import Link from "next/link";

export function CardsSection() {
  return (
    <WrapperContent>
      <div className={"grid_container"}>
        {navLinkList.map((v, i) => (
          <Link href={v.link} key={i}>
            <div className="item">
              <div className="icon_wrapper">
                <div style={{ backgroundColor: v.color }} className="icon">
                  {v.icon}
                </div>
              </div>

              <div className="text_wrapper">
                <Text variant={"B5"} className="title">
                  {v.subtitle}
                </Text>
                <Text variant={"B5"}>{v.story}</Text>
              </div>

              <div className={"footer"}>
                <Text variant={"B5"}>{v.title}</Text>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </WrapperContent>
  );
}

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  align-items: center;
  padding: 50px 0;
  @media ${AppStyles.breakpoints.sm} {
    width: 90%;
  }

  .grid_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    width: 90%;
    margin: 0 30px;

    @media ${AppStyles.breakpoints.sm} {
      grid-template-columns: 1fr;
      width: 100%;
    }

    .item {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${AppStyles.colors.backgroundDark};
      .icon_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: 32px;
        padding-bottom: 16px;

        .icon {
          color: white;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 50px;
          border-radius: 25px;
        }
      }
      .text_wrapper {
        padding: 10px 20px;
        .title {
          color: ${AppStyles.colors.offWhite1};
          margin-bottom: 12px;
          font-weight: 600;
          color: white;
        }
      }
      .footer {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${AppStyles.colors.backgroundLight};
      }
    }
  }
`;
