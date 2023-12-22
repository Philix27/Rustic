"use client";
import React from "react";
import { styled } from "styled-components";
import { AppStyles, device } from "@/lib";
import { Text, navLinkList } from "@/comps";
import Link from "next/link";

export function CardsSection() {
  return (
    <WrapperContent>
      <div className={"grid grid-cols-4 w-full my-12 gap-x-8 gap-y-8 "}>
        {navLinkList.map((v, i) => (
          <Link href={v.link} key={i}>
            <div
              style={{ backgroundColor: AppStyles.colors.backgroundDark }}
              className="h-[250px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-center w-full pt-8 pb-4 ">
                <div
                  style={{ backgroundColor: v.color }}
                  className={`text-white text-[20px] flex items-center justify-center h-[50px] w-[50px] rounded-[25px]`}
                >
                  {v.icon}
                </div>
              </div>

              <div className="px-5 py-3">
                <Text variant={"B3"} className="mb-3 font-semibold text-white">
                  {v.subtitle}
                </Text>
                <Text variant={"B4"}>{v.story}</Text>
              </div>
              <div
                className={`p-3 flex items-center justify-center`}
                style={{ backgroundColor: AppStyles.colors.backgroundLight }}
              >
                <Text variant={"B4"}>{v.title}</Text>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </WrapperContent>
  );
}

const Wrapper = styled.div`
  background-color: ${AppStyles.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  /* background-color: #2b1e07; */
  align-items: center;
  /* justify-content: center; */
  padding: 50px 0;
  @media ${device.sm} {
    background-color: #2b1e07;
  }
`;
