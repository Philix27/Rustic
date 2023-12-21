"use client";
import Image from "next/image";
import { styled } from "styled-components";
import { MarkdownStyledComp, AppWrapper, AppTopNavbar } from "@/comps";
import MdFile from "@/lib/docs/primary/skills.mdx";

export function AboutUsClient() {
  return (
    <>
      <AppTopNavbar title={"About us"} icons={[]} />
      <AppWrapper>
        <Wrapper>
          <Image
            height={300}
            width={300}
            src="/fxc.jpg"
            alt="rustic guide"
            style={{ borderRadius: "10px" }}
          />
        </Wrapper>
        <MarkdownStyledComp>
          <MdFile />
        </MarkdownStyledComp>
      </AppWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;
