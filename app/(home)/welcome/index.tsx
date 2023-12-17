import React, { useState } from "react";
import { styled } from "styled-components";
import { AppLinks, AppStyles } from "@/lib";
import { AppTopNavbar, AppFooter, Text, AppModal } from "@/comps";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

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
        <CardGrid>
          <Link href={AppLinks.books}>
            <div>Books</div>
          </Link>
          <Link href={AppLinks.blogs}>
            <div>Blogs</div>
          </Link>
          <Link href={AppLinks.quiz}>
            <div>Quiz</div>
          </Link>
          <Link href={AppLinks.admin}>
            <div>Admin</div>
          </Link>
        </CardGrid>
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  /* background-color: #07232b; */
  width: 100%;
  margin: 50px 0;
  a {
    background-color: ${AppStyles.colors.backgroundDark};
    color: ${AppStyles.colors.offWhite2};
    padding: 15px;
    border-radius: 10px;

    &:hover {
      border: solid 0.2px ${AppStyles.colors.grey2};
    }
    div {
      min-height: 200px;
    }
  }
`;
