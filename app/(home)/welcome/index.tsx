import React, { useState } from "react";
import { styled } from "styled-components";
import { AppLinks, AppStyles } from "@/lib";
import { AppTopNavbar, AppFooter, Text, AppModal, navLinkList } from "@/comps";
import Link from "next/link";
import { FaBookOpen, FaHamburger } from "react-icons/fa";

export default function WelcomeView(props: { title: string }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Wrapper>
      <AppTopNavbar
        title={"Welcome"}
        icons={[<FaHamburger key={1} onClick={() => setShowSidebar(true)} />]}
      />
      <WrapperContent>
        <Text variant={"B1"}>Welcome to the Rustic Guide</Text>
        <div className={"grid grid-cols-4 w-full my-12 gap-x-8 gap-y-5"}>
          {navLinkList.map((v, i) => (
            <Link href={v.link} key={i}>
              <div style={{ backgroundColor: AppStyles.colors.backgroundDark }}>
                <div
                  style={{ backgroundColor: v.color }}
                  className={`text-white text-[50px] bg-green-600 flex items-center justify-center rounded-md py-5 px-5 min-h-[150px]`}
                >
                  {v.icon}
                </div>
                <div className={`p-3 flex items-center justify-center`}>
                  <Text variant={"B4"}>{v.title}</Text>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={AppLinks.explore}>
          <Text variant={"B4"}>Explore</Text>
        </Link>
      </WrapperContent>
      <AppModal
        isMounted={showSidebar}
        onBlankClick={() => setShowSidebar(false)}
      >
        We did check
      </AppModal>
    </Wrapper>
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
`;
