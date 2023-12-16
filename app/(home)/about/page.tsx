"use client";
import Image from "next/image";
import { styled } from "styled-components";
import { MarkdownStyledComp, AppWrapper, AppTopNavbar } from "@/comps";
import MdFile from "@/lib/docs/primary/skills.mdx";
import * as stylex from "@stylexjs/stylex";

// const s = stylex.create();
const styles = stylex.create({
  root: {
    width: "100%",
    maxWidth: 800,
    minHeight: 40,
  },
});
// let g = s

export default function AboutUsPage() {
  return (
    <>
      <AppTopNavbar title={"About us"} icons={[]} />
      <AppWrapper>
        <Wrapper>
          <Image
            height={300}
            width={300}
            src="/fxc.jpg"
            alt="Eligbue Felix"
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